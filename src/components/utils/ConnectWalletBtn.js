import Button from 'react-bootstrap/Button';

const ConnectWalletBtn = () => {

    function buyTicketBtn() {
        console.log("Connect Tezos Wallet");
    }

    return (
        <Button variant="primary" onClick={buyTicketBtn}>Connect Wallet</Button>
    )
}

export default ConnectWalletBtn;
