import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ConnectWallet from './utils/ConnectWallet';
import DisconnectWallet from './utils/DisconnectWallet';
import PropTypes from 'prop-types';
import { Outlet, Link } from "react-router-dom";
import './css/NavBar.css';
import React from 'react';

function NavBar(props) {
    return (
        <>
            <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <Container style={{ padding: '0' }}>
                    <Link className='navbar-brand' to={"/"} style={{ textDecoration: 'none' }}>{props.title}</Link>
                    <Link to={"/rules"} style={{ textDecoration: 'none', fontSize: '22px' }}>Rules</Link>
                    {
                        props.beaconConnection ?
                            <div className='wallet-connected-container'>
                                <Navbar.Text style={{ marginRight: "10px" }}>
                                    Signed in as: <Link to={`https://ghostnet.tzkt.io/${props.userAddress}/operations/`} target='_blank'>{props.userAddress.slice(1, 7) + "..." + props.userAddress.slice(-4)}</Link> || {(props.userBalance / 1000000).toLocaleString("en-US")} XTZ </Navbar.Text>
                                <DisconnectWallet setUserAddress={props.setUserAddress} wallet={props.wallet} setBeaconConnection={props.setBeaconConnection} />
                            </div>
                            :
                            <ConnectWallet Tezos={props.Tezos} network={props.network} setWallet={props.setWallet} setUserAddress={props.setUserAddress} setUserBalance={props.setUserBalance} setBeaconConnection={props.setBeaconConnection} setContractStorage={props.setContractStorage} setContract={props.setContract} />
                    }
                </Container>
            </nav>
            <Outlet />
        </>
    );
}

NavBar.defaultProps = {
    title: "Tezos Lottery Game",
    beaconConnection: false,
}

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    beaconConnection: PropTypes.bool.isRequired,
}

export default NavBar;