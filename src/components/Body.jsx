import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/Body.css'
import ConnectWallet from './utils/ConnectWallet';
import Participants from './Participants';
import React from 'react';
import BuyTicket from './utils/BuyTicket';

function Body(props) {
    return (
        <div className="video-background-holder">
            <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                <source src="https://pub-6855fc93cc6e4f6aa0a5f705a6530d0e.r2.dev/case_studies/TEZOS_CASE-STUDY.mp4" type="video/mp4" />
            </video>
            <Container className='body-container'>
                <Row className='body-row'>
                    <Col>
                        <Card style={{ width: '18rem', textAlign: 'center' }} >
                            <Card.Header style={{ fontWeight: "bold" }}>Lottery Game Participants</Card.Header>
                            {
                                props.beaconConnection ?
                                    <Participants contract={props.contract} /> :
                                    <>
                                        <br />
                                        <p>Connect wallet to view Participants ...</p>
                                        <br />
                                    </>
                            }
                        </Card>
                    </Col>
                    <Col>
                        <Card className="text-center">
                            <Card.Header>Book a Ticket NOW!</Card.Header>
                            <Card.Body>
                                <Card.Title>Your chance to win 5 XTZ :D</Card.Title>
                                <Card.Text>Buy a lottery ticket for <em>1 XTZ</em> and get lucky chance to win 5 XTZ. </Card.Text>
                                {
                                    props.beaconConnection ?
                                        <Button variant="primary" onClick={() => BuyTicket(props.contract)}>BUY A TICKET</Button> :
                                        <ConnectWallet Tezos={props.Tezos} network={props.network} setWallet={props.setWallet} setUserAddress={props.setUserAddress} setUserBalance={props.setUserBalance} setBeaconConnection={props.setBeaconConnection} setContract={props.setContract} />
                                }
                            </Card.Body>
                            <Card.Footer className="text-muted">Lottery Game Closing Soon</Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Body;
