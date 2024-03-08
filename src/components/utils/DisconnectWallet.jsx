import React from 'react';

const DisconnectWallet = (props) => {

    const disconnect = () => {
        props.setBeaconConnection(false);
        props.setUserAddress("");
    }


    return (
        <button type="button" className="btn btn-warning" onClick={disconnect}>Disconnect Wallet</button>
    )
}

export default DisconnectWallet
