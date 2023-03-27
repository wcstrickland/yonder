import React, { useState } from 'react';
import './initiative.css';
import Plaque from '../Plaque/Plaque';
import { v4 as uuidv4 } from 'uuid';
import monsterJson from '../../resource/json/all_monsters.json'
import InitMonsterDropDown from '../InitMonsterDropDown/InitMonsterDropDown';

export default function Initiative() {

    const monsters = monsterJson["monsters"]
    let monsterIdxByName = {}
    monsters.map((e, idx) => monsterIdxByName[e["name"]] = idx)

    const [participants, setParticipants] = useState({
        "30": [],
        "29": [],
        "28": [],
        "27": [],
        "26": [],
        "25": [],
        "24": [],
        "23": [],
        "22": [],
        "21": [],
        "20": [],
        "19": [],
        "18": [],
        "17": [],
        "16": [],
        "15": [],
        "14": [],
        "13": [],
        "12": [],
        "11": [],
        "10": [],
        "9": [],
        "8": [],
        "7": [],
        "6": [],
        "5": [],
        "4": [],
        "3": [],
        "2": [],
        "1": [],
        "0": [],
        "-1": [],
        "-2": [],
        "-3": [],
        "-4": [],
        "-5": [],
        "-6": []
    })

    const [inputName, setInputName] = useState("")
    const [inputHp, setInputHp] = useState("")
    const [inputAc, setInputAc] = useState("")
    const [inputInit, setInputInit] = useState("")


    function addParticipant({nme, ac, hp, init, imune, monsterId} ) {
        console.log("adding participant")
console.log({nme, ac, hp, init, imune, monsterId})
        let conditions = {
            "frightened": false,
            "poisoned": false,
            "charmed": false,
            "grappled": false,
            "paralyzed": false,
            "petrified": false,
            "blind": false,
            "prone": false
        }
        if(imune !== undefined && imune !== null){
            for(let cond in conditions){
                if(imune.includes(cond))
                delete conditions[cond]
            }
        }


        let newParticipants = { ...participants }
        newParticipants[init].push({
            "name": nme,
            "ac": ac,
            "hp": hp,
            "init": init,
            "monsterId": monsterId,
            "id": uuidv4(),
            "conditions": conditions
        })
        setParticipants({ ...newParticipants })
    }

    function removeParticipant(id, init) {
        let newParts = { ...participants }
        newParts[init] = newParts[init].filter(p => p.id !== id)
        setParticipants({ ...newParts })
    }

    function updateParticipant(prt) {
        let newParts = { ...participants }
        for (let i = 0; i < Object.keys(newParts).length; i++) {

            if (Object.keys(newParts)[i] === prt.init) {
                Object.values(newParts)[i].push(prt)
            } else {
                let row = []
                for (let ea of Object.values(newParts)[i]) {
                    if (prt.id !== ea.id) {
                        row.push(ea)
                    }
                }
                newParts[Object.keys(newParts)[i]] = row
            }
        }
        setParticipants({ ...newParts })
    }

    function updateParticipantName(prt) {
        let newParts = { ...participants }
        for (let i = 0; i < Object.keys(newParts).length; i++) {
            let row = []
            for (let ea of Object.values(newParts)[i]) {
                if (prt.id === ea.id) {
                    row.push(prt)
                } else {
                    row.push(ea)
                }
            }
            newParts[Object.keys(newParts)[i]] = row
        }
        setParticipants({ ...newParts })
    }


    let outPut = []
    for (let row in participants) {
        if (participants[row].length > 0) {
            outPut.push(participants[row])
        }
    }
    outPut.reverse()

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div className='initContainer' style={{ marginBottom: "2em" }}>
                    <article id="participantInput">
                        <input id="nameInput" type={"text"} placeholder={"name"} onChange={(e) => setInputName(e.target.value)} ></input>
                        <input type={"text"} placeholder={"hp"} onChange={(e) => setInputHp(e.target.value)} ></input>
                        <input type={"text"} placeholder={"ac"} onChange={(e) => setInputAc(e.target.value)} ></input>
                        <input type={"text"} placeholder={"init"} onChange={(e) => setInputInit(e.target.value)} ></input>
                        <button onClick={() => addParticipant({"nme":inputName,"ac": inputAc,"hp": inputHp, "init": inputInit, "imune": null, "monsterId": null})}> Add </button>
                        <InitMonsterDropDown rollInitFunc={addParticipant} />
                    </article>
                    <div className='participantGrid'>
                        {outPut.map(r => <div className='participantRow'>{r.map(p => <Plaque name={p.name} ac={p.ac} monsterId={p.monsterId} hp={p.hp} init={p.init} id={p.id} conditions={p.conditions} removeFunc={() => removeParticipant(p.id, p.init)} updateFunc={updateParticipant} updateNameFunc={updateParticipantName} />)}</div>)}
                    </div>
                </div>
            </div>
        </>
    );
}
