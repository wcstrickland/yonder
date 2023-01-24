import React, { useState } from 'react';
import './RollerDiceButton.css';

export default function RollerDiceButton(props) {

    const [numDice, setNumDice] = useState(0)

    function increaseNumDice() {
        setNumDice(numDice + 1)
    }

    function decreaseNumDice() {
        if (numDice > 0) {
            setNumDice(numDice - 1)
        }
    }


    return (
        <>
            <button className='RollerDiceButton'
                onClick={() => {
                    increaseNumDice()
                    props.increment()
                }
                }
                onContextMenu={(e) => {
                    e.preventDefault()
                    decreaseNumDice()
                    props.decrement()
                }
                }>
                <div className='RollerDiceIndicator'>{numDice > 0 ? numDice : ""}</div>
                <div className='RollerDiceText'>{props.text}</div>
            </button>
        </>
    );
}
