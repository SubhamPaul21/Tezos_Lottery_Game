import { TempleWallet } from '@temple-wallet/dapp';
import React, { useState, useEffect } from "react";

export default function ConnectWallet(props) {

    const connect = async () => {
        try {
            console.log("Connecting to Temple");
            const available = await TempleWallet.isAvailable();
            if (!available) {
                throw new Error('Temple Wallet not installed');
            } else {
                const wallet = new TempleWallet('My Awesome Dapp');
                await wallet.connect('ghostnet');

                // the TempleWallet can return an instance of the Tezos singleton
                const Tezos = wallet.toTezos();
                // the TempleWallet can return the user's address
                const userAddress = wallet.pkh || (await wallet.getPKH());
                props.setUserAddress(userAddress);

                Tezos.setWalletProvider(wallet);
                console.log(`User address: ${userAddress}`);
                // console.log(props.setAddress);
                props.setBeaconConnection(true);

                // set user Balance
                const balance = await Tezos.tz.getBalance(userAddress);
                props.setUserBalance(balance.toNumber());
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <button type="button" class="btn btn-success" onClick={connect}>Connect Wallet</button>
    )
}
// export default function ConnectWalletBtn() {
//     const [userAddress, setUserAddress] = useState("");
//     const [wallet, setWallet] = useState("");
//     const [userBalance, setUserBalance] = useState(0);
//     const [beaconConnection, setBeaconConnection] = useState(false);

//     useEffect(() => {
//         (async () => {
//             try {
//                 const Tezos = new TezosToolkit('https://rpc.ghostnet.teztnets.com');
//                 const options = {
//                     name: 'My Tezos Wallet',
//                     preferredNetwork: NetworkType.GHOSTNET,
//                     // disableDefaultEvents: false,
//                 };

//                 const Wallet = new BeaconWallet(options);
//                 Tezos.setWalletProvider(Wallet);
//                 setWallet(Wallet);
//                 // checks if wallet was connected before
//                 const activeAccount = await Wallet.client.getActiveAccount();
//                 if (activeAccount) {
//                     const userAddress = await Wallet.getPKH();
//                     setUserAddress(userAddress);
//                     setBeaconConnection(true);
//                 }
//             } catch (error) {
//                 console.log(error);
//             }
//         })();
//     }, []);

//     const connectWallet = async () => {
//         console.log("Connecting Wallet!");
//         try {
//             await wallet.requestPermissions({
//                 "network": {
//                     "type": NetworkType.GHOSTNET,
//                     "rpcUrl": "https://rpc.ghostnet.teztnets.com",
//                 }
//             });

//             // get user's address
//             const address = await wallet.getPKH();
//             console.log(`Connected User Address: ${address}`);
//             setUserAddress(address);
//             setBeaconConnection(true);
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     return (
//         <Button variant="primary" onClick={connectWallet}>Connect Wallet</Button>
//     )
// }