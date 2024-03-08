import { BeaconWallet } from '@taquito/beacon-wallet';
import { TempleWallet } from '@temple-wallet/dapp';
import React from 'react';

export default function ConnectWallet(props) {

    const DAPP_NAME = 'Tezos Lottery Game';
    const connect = async () => {
        try {
            console.log("Connecting to Beacon Wallet!");
            try {
                const options = {
                    name: DAPP_NAME,
                    network: { type: props.network },
                    disableDefaultEvents: false,
                };

                const wallet = new BeaconWallet(options);
                await wallet.requestPermissions();

                const userAddress = await wallet.getPKH();
                props.setUserAddress(userAddress);

                props.Tezos.setWalletProvider(wallet);
                console.log(`User address: ${userAddress}`);
                props.setBeaconConnection(true);

                // set user Balance
                const balance = await props.Tezos.tz.getBalance(userAddress);
                props.setUserBalance(balance.toNumber());
                props.setWallet("Beacon");
            } catch (error) {
                console.log("Error connecting to Beacon: ", error);
                console.log("Beacon Wallet Not Available, Explicitly Connecting to Temple Wallet");
                const available = await TempleWallet.isAvailable();
                if (!available) {
                    throw new Error("No Wallet Found");
                } else {
                    const wallet = new TempleWallet(DAPP_NAME);
                    await wallet.connect('ghostnet');

                    // the TempleWallet can return an instance of the Tezos singleton
                    const Tezos = wallet.toTezos();
                    // the TempleWallet can return the user's address
                    const userAddress = wallet.pkh || (await wallet.getPKH());
                    props.setUserAddress(userAddress);

                    Tezos.setWalletProvider(wallet);
                    console.log(`User address: ${userAddress}`);
                    props.setBeaconConnection(true);

                    // set user Balance
                    const balance = await Tezos.tz.getBalance(userAddress);
                    props.setUserBalance(balance.toNumber());
                    props.setWallet("Temple");
                }

            }
        } catch (err) {
            console.log(err);
            alert(err.message);
        }
    }

    return (
        <button type="button" className="btn btn-success" onClick={connect}>Connect Wallet</button>
    )
}