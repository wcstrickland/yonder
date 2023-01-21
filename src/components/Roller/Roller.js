import React, { useState } from 'react';
import './Roller.css';
import RollerModal from '../RollerModal/RollerModal';


export default function Roller() {

    const [sides, setSides] = useState(0)
    const [number, setNumber] = useState(0)

    function useInput(opts) {
        const [value, setValue] = React.useState('0');
        const input = <input
            value={value}
            onChange={e => setValue(e.target.value)}
            {...opts} />

        return [value, input];
    }

    const [mod, modInput] = useInput({ placeholder: '+3' })

    const diceSides = [4, 6, 8, 10, 12, 20]
    const numDice = [1, 2, 3, 4, 5, 6]
    let rows = diceSides.map(row => {
        return (<tr>
            <th scope="row">{"d" + row}</th>
            {numDice.map(n => {
                return (<td><button onClick={() => {
                    setSides(row)
                    setNumber(n)
                }}>{n}d{row}</button></td>)
            })}
        </tr>)
    })



    return (
        <>
            <main className="container Roller">
                <div className="grid">
                    <div>
                        <label htmlFor="modifier">
                            Modifier
                            {modInput}
                        </label>
                    </div>
                    <div></div>
                    <div></div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">🎲</th>
                            {[...Array(6).keys()].map(x => <th scope="col">{x + 1}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
                <RollerModal mod={mod} sides={sides} number={number} />
            </main>
        </>
    );
}
