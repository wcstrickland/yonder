import React, { useState } from 'react';
import './Roller.css';
import OutcomeModal from '../OutComeModal/OutComeModal'


export default function Roller(props) {

    const [sides, setSides] = useState(0)
    const [number, setNumber] = useState(0)

    function useInput(opts) {
        const [value, setValue] = React.useState('0');
        const input = <input
            style={{width: "50%", marginTop: "1em"}}
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
                    setModalVisible(true)
                }}>{n}d{row}</button></td>)
            })}
        </tr>)
    })


    const [modalVisible, setModalVisible] = useState(false)

    function closeModal(){
        setModalVisible(false)
    }

    return (
        <>
            <div className="container modal" >
                <article className='modal-content'>
                    <table>
                        <thead>
                            <tr>
                                <th style={{width: "15%"}} scope="col">{modInput}</th>
                                {[...Array(6).keys()].map(x => <th scope="col">{x + 1}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                    <button onClick={()=> props.closeModal()}>Close</button>
                    {modalVisible && <OutcomeModal closeModal={closeModal} mod={mod} sides={sides} number={number} />}
                </article>
            </div>
        </>
    );
}
