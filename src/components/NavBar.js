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
                        props.walletConnected ?
                            <Navbar.Text> Signed in as: <a href="#login">Mark Otto</a> </Navbar.Text> :
                            <ConnectWalletBtn />
                    }
                </Container>
            </nav>
            <Outlet />
        </>
    );
}

NavBar.defaultProps = {
    title: "Tezos Lottery Game",
    walletConnected: false,
}

NavBar.propTypes = {
    title: PropTypes.string,
    walletConnected: PropTypes.bool,
}

export default NavBar;