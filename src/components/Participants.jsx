import ListGroup from 'react-bootstrap/ListGroup';
import React from 'react';

export default function Participants(props) {
    let participants = ["0x1"];
    (async function () {
        const storage = await props.contract.storage();
        const players = await storage.players;
        console.log("Participants Before: ", players);
        // console.log("Player 1: ", players.args[0].string);
        players.forEach(element => {
            console.log(element);
            participants.push(element);
        })

        console.log("Participants After: ", participants);

        return (
            <ListGroup variant="flush">
                {
                    participants.map((participant, index) => {
                        return <ListGroup.Item action key={index} href={`https://ghostnet.tzkt.io/${participant}/operations/`} target='_blank' > {participant}</ListGroup.Item>
                    })
                }
            </ListGroup >
        )
    })()
}
