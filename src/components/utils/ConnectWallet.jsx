import { BeaconWallet } from '@taquito/beacon-wallet';
import { TempleWallet } from '@temple-wallet/dapp';
import React from 'react';

export default function ConnectWallet(props) {

    const DAPP_NAME = 'Tezos Lottery Game';
    let userAddress;
    let balance;
    let wallet;

    const connect = async () => {
        try {
            console.log("Connecting to Beacon Wallet!");
            try {
                const options = {
                    name: DAPP_NAME,
                    network: { type: props.network },
                    disableDefaultEvents: false,
                };

                wallet = new BeaconWallet(options);
                await wallet.requestPermissions();
                // set user Balance
                userAddress = await wallet.getPKH();
                balance = await props.Tezos.tz.getBalance(userAddress);
            } catch (error) {
                console.log(error);
                console.log("Beacon Wallet Not Available, Explicitly Connecting to Temple Wallet");
                const available = await TempleWallet.isAvailable();
                if (!available) {
                    throw new Error("No Wallet Found");
                } else {
                    wallet = new TempleWallet(DAPP_NAME);
                    await wallet.connect('ghostnet');
                    // the TempleWallet can return an instance of the Tezos singleton
                    const Tezos = wallet.toTezos();
                    // set user Balance
                    userAddress = await wallet.getPKH();
                    balance = await Tezos.tz.getBalance(userAddress);
                }
            }
            console.log(`User address: ${userAddress}`);
            const contract = await props.Tezos.wallet.at("KT1MTE4jhKdakDivfbi98WcDnpem9y2KyR5v")
            props.setUserAddress(userAddress);
            props.Tezos.setWalletProvider(wallet);
            props.setUserBalance(balance.toNumber());
            props.setWallet(wallet);
            props.setContract(contract);
            const storage = await contract.storage();
            props.setContractStorage(storage);

            props.setBeaconConnection(true);
        } catch (err) {
            console.log(err);
            alert(err.message);
        }
    }

    return (
        <button type="button" className="btn btn-success" onClick={connect}>Connect Wallet</button>
    )
}