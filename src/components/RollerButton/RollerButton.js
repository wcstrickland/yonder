import React, { useState } from 'react';
import './RollerButton.css';

export default function RollerButton(props) {
    const sides = props.sides
    const number = props.number
    const mod = props.mod

    let processedMod = mod == "" ? 0 : mod
    // console.log(mod)

    const [outPut, setOutPut] = useState("")

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + 1);
    }

    function diceRollModal(sides, number) {
        let total = 0
        let rolls = []
        for (let i = 0; i <= number; i++) {
            if (i == number) {
                rolls.push(`${processedMod}`)
                total += parseInt(processedMod)
            } else {
                let roll = randomNumber(1, sides)
                console.log(roll)
                rolls.push(roll)
                total += (roll)
                if(parseInt(processedMod)>=0){
                    rolls.push(" +")
                }
                    rolls.push(" ")
            }
        }
        rolls.push(` = ${total}`)
        return rolls.join("")

    }
    console.log({props})

    return (
        <>
            <div className='RollerButton'>
                <button style={{ marginTop: "1em", marginBottom: "1em" }} onClick={() => {
                    let op = diceRollModal(sides, number)

                    setOutPut(op)
                    navigator.clipboard.writeText(op)
                }}>{number}d{sides}{mod !== "" ? ` + ${mod}` : ""}</button>
                <input style={{ marginTop: "1em", marginBottom: "1em", fontSize: "23px" }} disabled value={outPut} />
            </div>
        </>
    );
}
