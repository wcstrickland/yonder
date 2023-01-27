import React, { useState } from 'react';
import './RollerMenu.css';
import RollerDiceButton from '../RollerDiceButton/RollerDiceButton';

export default function RollerMenu() {

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const [d4, setD4] = useState(0)
    const [d6, setD6] = useState(0)
    const [d8, setD8] = useState(0)
    const [d10, setD10] = useState(0)
    const [d12, setD12] = useState(0)
    const [d20, setD20] = useState(0)

    const increment = (stat, setStat) => {
        return () => {
            setStat(stat + 1)
        }
    }
    const decrement = (stat, setStat) => {
        return () => setStat(stat - 1)
    }

    function executeRoll(crit) {
        let total = 0
        let result = ""
        let rolls = [
            Array(d4).fill(1).map(() => randomNumber(1, 4)),
            Array(d6).fill(1).map(() => randomNumber(1, 6)),
            Array(d8).fill(1).map(() => randomNumber(1, 8)),
            Array(d10).fill(1).map(() => randomNumber(1, 10)),
            Array(d12).fill(1).map(() => randomNumber(1, 12)),
            Array(d20).fill(1).map(() => randomNumber(1, 20))
        ]

        for (let i=0; i<rolls.length; i++) {
            let roll = rolls[i]
            roll.map(e => total += e)
            result += roll.join(" + ")
            if(roll.length>0 &&  i<rolls.length-1){
                result += " + "
            }
        }
        result = result[result.length-2] === "+" ? result.slice(0,result.length-2) : result
        if(crit){
            result += ` for a total of ${total} x 2 =  ${total*2}`
        }else{
            result += ` for a total of ${total}`
        }
        navigator.clipboard.writeText(result)
        return result
    }

    const [modalVisible, setModalVisible] = useState(false)
    const [isCrit, setIsCrit] = useState(false)
    const [outCome, setOutcome] = useState('')

    function toggleModal(crit){
        if(!modalVisible){
            setOutcome(executeRoll(crit))
        }
        setModalVisible(!modalVisible)
    }


    let modal = (
        <dialog open>
            <article>
                <p>
                    {outCome}
                </p>
                <footer>
                    <button onClick={()=> toggleModal(isCrit)}>Close</button>
                    </footer>
            </article>
        </dialog>
    )


    let exRollButton = (
                <button 
                className='execute-roll' 
                onClick={() => {
                        toggleModal(isCrit)
                }}
                onContextMenu={(e)=>{
                    e.preventDefault()
                    setIsCrit(true)
                }}
                >ROLL</button>
    )

    let critRollButton = (
                <button 
                className='execute-crit' 
                onClick={() => {
                        toggleModal(isCrit)
                }}
                onContextMenu={(e)=>{
                    e.preventDefault()
                    setIsCrit(false)
                }}
                >CRIT</button>
    )

    return (
        <>
            <div className='RollerMenu'>
                {isCrit ? critRollButton : exRollButton}
                <RollerDiceButton text={20} increment={increment(d20, setD20)} decrement={decrement(d20, setD20)} />
                <RollerDiceButton text={4} increment={increment(d4, setD4)} decrement={decrement(d4, setD4)} />
                <RollerDiceButton text={6} increment={increment(d6, setD6)} decrement={decrement(d6, setD6)} />
                <RollerDiceButton text={8} increment={increment(d8, setD8)} decrement={decrement(d8, setD8)} />
                <RollerDiceButton text={10} increment={increment(d10, setD10)} decrement={decrement(d10, setD10)} />
                <RollerDiceButton text={12} increment={increment(d12, setD12)} decrement={decrement(d12, setD12)} />
            </div>
            {modalVisible && modal}
        </>
    );
}
