import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/Body.css'
import ConnectWallet from './utils/ConnectWallet';
import Participants from './Participants';

function Body(props) {

    function buyTicketBtn() {
        console.log("User bought a ticket for Lotter!");
    }

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
                            <Participants />
                        </Card>
                    </Col>
                    <Col>
                        <Card className="text-center">
                            <Card.Header>Book a Ticket NOW!</Card.Header>
                            <Card.Body>
                                <Card.Title>Your chance to win 5 XTZ :D</Card.Title>
                                <Card.Text>
                                    Buy a lotter ticket for <em>1 XTZ</em> and get lucky chance to win 5 XTZ.
                                </Card.Text>
                                {
                                    props.beaconConnection ?
                                        <Button variant="primary" onClick={buyTicketBtn}>BUY A TICKET</Button> :
                                        <ConnectWallet setUserAddress={props.setUserAddress} setBeaconConnection={props.setBeaconConnection} setUserBalance={props.setUserBalance} />
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
