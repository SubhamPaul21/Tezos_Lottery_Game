import ListGroup from 'react-bootstrap/ListGroup';
import React from 'react';

export default function Participants(props) {
    const players = props.contractStorage.players;
    let participants = [];
    players.forEach(element => {
        participants.push(element);
    })

    return (
        <ListGroup variant="flush">
            {
                participants.map((participant, index) => {
                    return <ListGroup.Item action key={index} href={`https://ghostnet.tzkt.io/${participant}/operations/`} target='_blank' >{participant}</ListGroup.Item>
                })
            }
        </ListGroup >
    )
}