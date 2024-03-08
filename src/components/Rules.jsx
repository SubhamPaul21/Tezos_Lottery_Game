import React from 'react';

const Rules = () => {
    return (
        <div className="container">
            <h1 className="text-center my-5">Some Rules of the Game</h1>
            <ul className="text-center" style={{listStyle: 'none'}}>
                <h4><li className="my-5">Each ticket costs 1 tez.</li></h4>
                <h4><li className="my-5">You can buy only one ticket.</li></h4>
                <h4><li className="my-5">A total of 5 tickets are sold before deciding a winner.</li></h4>
                <h4><li className="my-5">The game resets after a winner is chosen.</li></h4>
            </ul>
        </div>
    )
}

export default Rules
