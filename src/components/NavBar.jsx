import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ConnectWalletBtn from './utils/ConnectWalletBtn';
import PropTypes from 'prop-types';
import { Outlet, Link } from "react-router-dom";

function NavBar(props) {
    return (
        <>
            <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <Container>
                    <Link className='navbar-brand' to={"/"} style={{ textDecoration: 'none' }}>{props.title}</Link>
                    <Link to={"/rules"} style={{ textDecoration: 'none', fontSize: '22px' }}>Rules</Link>
                    {
                        props.beaconConnection ?
                            <Navbar.Text>
                                Signed in as: <Link to={`https://ghostnet.tzkt.io/${props.userAddress}/operations/`} target='_blank'>{props.userAddress.slice(1, 7) + "..." + props.userAddress.slice(-4)}</Link> || {(props.userBalance / 1000000).toLocaleString("en-US")} XTZ </Navbar.Text> :
                            <ConnectWalletBtn setUserAddress={props.setUserAddress} setBeaconConnection={props.setBeaconConnection} setUserBalance={props.setUserBalance} />
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
    title: PropTypes.string,
    walletConnected: PropTypes.bool,
}

export default NavBar;