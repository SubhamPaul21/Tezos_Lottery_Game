import React from 'react';

const DisconnectWallet = (props) => {

    const disconnect = () => {
        props.setBeaconConnection(false);
        props.setUserAddress("");
        props.wallet.client.clearActiveAccount();
    }


    return (
        <button type="button" className="btn btn-warning" onClick={disconnect}>Disconnect Wallet</button>
    )
}

export default DisconnectWallet
