import ListGroup from 'react-bootstrap/ListGroup';

const Participants = props => {
    let participants = ["0x1", "0x2", "0x3", "0x4", "0x5", "0x5"]


    return (
        <ListGroup variant="flush">
            {
                participants.map((participant, index) => {
                    return <ListGroup.Item action key={index} href={`https://ghostnet.tzkt.io/${participant}/operations/`} target='_blank' > {participant}</ListGroup.Item>
                })
            }
        </ListGroup >
    )
}

export default Participants;
