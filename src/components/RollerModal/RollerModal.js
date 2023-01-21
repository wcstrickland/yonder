import React from 'react';
import './RollerModal.css';

export default function RollerModal(props) {

    const sides = props.sides
    const number = props.number
    const mod = props.mod

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    function diceRollModal(sides, number) {
        let total = 0
        let rolls = []
        for (let i = 1; i <= number; i++) {
            let roll = randomNumber(1, sides)
            rolls.push(roll)
            total += (roll)
            rolls.push(" + ")
            if (i === number) {
                rolls.push(` mod (${mod})`)
                total += parseInt(mod)
            }
        }
        rolls.push(`   for a total: ${total}`)
        return rolls.join("")
        
    }

    return (
        <>
            <article className='RollerModal-main'>
                <h3>Rolling: {number}d{sides}</h3>
                <p>
                    {diceRollModal(sides, number)}
                </p>
                <footer>
                    <a href="#confirm" role="button">Copy</a>
                </footer>
            </article>
        </>
    );
}
