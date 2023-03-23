import React, { useState } from 'react';
import './initiative.css';
import Plaque from '../Plaque/Plaque';
import {v4 as uuidv4} from 'uuid';

export default function Initiative() {

    const [participants, setParticipants] = useState({
        "30" : [],
        "29" : [],
        "28" : [],
        "27" : [],
        "26" : [],
        "25" : [],
        "24" : [],
        "23" : [],
        "22" : [],
        "21" : [],
        "20" : [],
        "19" : [],
        "18" : [],
        "17" : [],
        "16" : [],
        "15" : [],
        "14" : [],
        "13" : [],
        "12" : [],
        "11" : [],
        "10" : [],
        "9" : [],
        "8" : [],
        "7" : [],
        "6" : [],
        "5" : [],
        "4" : [],
        "3" : [],
        "2" : [],
        "1" : [],
        "0" : [],
        "-1" : [],
        "-2" : []
    })

    const [inputName, setInputName] = useState("")
    const [inputHp, setInputHp] = useState("")
    const [inputAc, setInputAc] = useState("")
    const [inputInit, setInputInit] = useState("")


    function addParticipant(nme, ac, hp, init) {
        let newParticipants = {...participants}
        newParticipants[init].push({"name": nme, "ac": ac, "hp": hp, "init": init, "id": uuidv4()})
        setParticipants(newParticipants)
    }

    function removeParticipant(id, init){
        let newParts = { ...participants }
        newParts[init] = newParts[init].filter(p => p.id !== id)
        setParticipants(newParts)
    }

    function rndr(){
        let outPut = []
        for(let row in participants){
            if(participants[row].length > 0){
                outPut.push(participants[row])
            }
        }
        return outPut.reverse()
    }


    return (
        <>
            <div className='container' style={{marginBottom:"2em"}}>
                <article id="participantInput">
                    <input type={"text"} placeholder={"hp"} onChange={(e) => setInputHp(e.target.value)} ></input>
                    <input type={"text"} placeholder={"ac"} onChange={(e) => setInputAc(e.target.value)} ></input>
                    <input type={"text"} placeholder={"init"} onChange={(e) => setInputInit(e.target.value)} ></input>
                    <input id="nameInput" type={"text"} placeholder={"name"} onChange={(e) => setInputName(e.target.value)} ></input>
                    <button onClick={() => addParticipant(inputName, inputAc, inputHp, inputInit)}> Add </button>
                </article>
                <div className='participantGrid'>
                    {rndr().map(r => <div className='participantRow'>{r.map(p => <Plaque name={p.name} ac={p.ac}  hp={p.hp}  init={p.init} id={p.id} removeFunc={() => removeParticipant(p.id, p.init)}/>)}</div>)}
                </div>
            </div>
        </>
    );
}
