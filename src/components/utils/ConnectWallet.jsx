import { BeaconWallet } from '@taquito/beacon-wallet';
import { TempleWallet } from '@temple-wallet/dapp';
import React from 'react';

export default function ConnectWallet(props) {
    // props.Tezos
    // props.setWallet
    // props.setUserAddress
    // props.SetUserBalance
    // props.setBeaconConnection

    const DAPP_NAME = 'My Awesome Dapp';
    const connect = async () => {
        try {
            console.log("Connecting to Temple Wallet!");
            const available = await TempleWallet.isAvailable();
            if (!available) {
                console.log("Temple Wallet Not Available, Connecting to Beacon Wallet");
                const options = {
                    name: DAPP_NAME,
                    iconUrl: 'https://tezostaquito.io/img/favicon.svg',
                    network: { type: props.network },
                    eventHandlers: {
                        PERMISSION_REQUEST_SUCCESS: {
                            handler: async (data) => {
                                console.log('permission data:', data);
                            },
                        },
                    },
                };

                const wallet = new BeaconWallet(options);
                await wallet.requestPermissions();

                const userAddress = await wallet.getPKH();
                props.setUserAddress(userAddress);

                props.Tezos.setWalletProvider(wallet);
                console.log(`User address: ${userAddress}`);
                props.setBeaconConnection(true);

                // set user Balance
                const balance = await Tezos.tz.getBalance(userAddress);
                props.setUserBalance(balance.toNumber());
                props.setWallet("Beacon");
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
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <button type="button" className="btn btn-success" onClick={connect}>Connect Wallet</button>
    )
}