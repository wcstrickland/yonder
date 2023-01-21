import React, { useState } from 'react';
import './RollerButton.css';

export default function RollerButton(props) {
    const sides = props.sides
    const number = props.number
    const mod = props.mod

    let processedMod = mod == "" ? 0 : mod

    const [outPut, setOutPut] = useState("")

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    function diceRollModal(sides, number) {
        let total = 0
        let rolls = []
        for (let i = 0; i <= number; i++) {
            if (i == number) {
                rolls.push(` mod (${processedMod})`)
                total += parseInt(processedMod)
            } else {
                let roll = randomNumber(1, sides)
                rolls.push(roll)
                total += (roll)
                rolls.push(" + ")
            }
        }
        rolls.push(`   for a total: ${total}`)
        return rolls.join("")

    }

    return (
        <>
            <div className='RollerButton'>
                <button style={{ marginTop: "1em", marginBottom: "1em" }} onClick={() => setOutPut(diceRollModal(sides, number))}>{number}d{sides}+{processedMod}</button>
                <input style={{ marginTop: "1em", marginBottom: "1em" }} disabled value={outPut} />
            </div>
        </>
    );
}
