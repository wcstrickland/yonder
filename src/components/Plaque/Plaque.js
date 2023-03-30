import React, { useState } from 'react';
import './Plaque.css';
import { Link } from 'react-router-dom';
import monsterJson from '../../resource/json/all_monsters.json'
import MonsterSheet from '../MonsterSheet/MonsterSheet';


export default function Plaque(props) {

    const monsters = monsterJson["monsters"]
    let monsterIdxByName = {}
    monsters.map((e, idx) => monsterIdxByName[e["name"]] = idx)
    let linkString = `/monster/${props.monsterId}`
    const monster = monsters[props.monsterId]

    const [hp, setHp] = useState(props.hp)
    const [init, setInit] = useState(props.init)
    const [name, setName] = useState(props.name)
    const [nameHidden, setNameHidden] = useState(true)
    const [conditions, setConditions] = useState({ ...props.conditions })
    const [dead, setDead] = useState(false)
    const [conditionHidden, setConditionHidden] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [selectedCondition, setSelectedCondition] = useState("prone")

    const conditionText = {
        "frightened": ["- A frightened creature has disadvantage on ability checks and attack rolls while the source of its fear is within Line of Sight.",
        "- The creature can’t willingly move closer to the source of its fear."
        ],
        "poisoned": ["- A poisoned creature has disadvantage on attack rolls and ability checks."],
        "charmed": ["- A charmed creature can’t attack the charmer or target the charmer with harmful Abilities or Magical Effects.",
        "The charmer has advantage on any ability check to interact socially with the creature."
        ],
        "grappled": [
            "- A grappled creature’s speed becomes 0, and it can’t benefit from any bonus to its speed.",
            "- The condition ends if the Grappler is incapacitated (see the condition).",
            "- The condition also ends if an Effect removes the grappled creature from the reach of the Grappler or Grappling Effect, such as when a creature is hurled away by the thunderwave spell."
         ],
        "paralyzed":[
            "- A paralyzed creature is incapacitated (see the condition) and can’t move or speak.",
            "- The creature automatically fails Strength and Dexterity saving throws.",
            "- Attack rolls against the creature have advantage.",
            "- Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature."
         ],
        "petrified":[ 
            "- A petrified creature is Transformed, along with any nonmagical object it is wearing or carrying, into a solid inanimate substance (usually stone). Its weight increases by a factor of ten, and it ceases aging.",
            "- The creature is incapacitated (see the condition), can’t move or speak, and is unaware of its surroundings.",
            "- Attack rolls against the creature have advantage.",
            "- The creature automatically fails Strength and Dexterity saving throws.",
            "- The creature has resistance to all damage.",
            "- The creature is immune to poison and disease, although a poison or disease already in its system is suspended, not neutralized."
        ],
        "blind":[ 
            "- A blinded creature can’t see and automatically fails any ability check that requires sight.",
            "- Attack rolls against the creature have advantage, and the creature’s Attack rolls have disadvantage."
        ],
        "prone":[ 
            "- A prone creature’s only movement option is to crawl, unless it stands up and thereby ends the condition.",
            "- The creature has disadvantage on attack rolls.",
            "- An attack roll against the creature has advantage if the attacker is within 5 feet of the creature. Otherwise, the Attack roll has disadvantage."
        ]
    }

    function updatePlaque(newValObj) {
        let nwPlq = {
            "name": newValObj["name"] || props.name,
            "ac": newValObj["ac"] || props.ac,
            "hp": newValObj["hp"] || props.hp,
            "init": newValObj["init"] || props.init,
            "monsterId": newValObj["monsterId"] || props.monsterId,
            "id": props.id,
            "conditions": { ...conditions }
        }
        props.updateFunc(nwPlq)
    }

    function updatePlaqueName(newValObj) {

        let nwPlq = {
            "name": newValObj["name"] || props.name,
            "ac": newValObj["ac"] || props.ac,
            "hp": newValObj["hp"] || props.hp,
            "init": newValObj["init"] || props.init,
            "monsterId": newValObj["monsterId"] || props.monsterId,
            "id": props.id,
            "conditions": { ...conditions }
        }
        props.updateNameFunc(nwPlq)
    }

    function rndrConditions() {
        let outputArr = []
        for (let i = 0; i < Object.keys(conditions).length; i++) {
            let addr = {}
            addr[Object.keys(conditions)[i]] = Object.values(conditions)[i]
            outputArr.push(addr)
        }
        return (
            outputArr.map(c => <> <div className={!conditionHidden ? 'conditionShown' : "conditionHidden"} ><input type={"checkbox"} id={Object.keys(c)[0]} name={Object.keys(c)[0]} ></input><label onMouseEnter={() => setSelectedCondition(Object.keys(c)[0])} onClick={() => setModalVisible(true)}>{Object.keys(c)[0]}</label></div></>)
        )
    }


    function toggleModal() {
        setModalVisible(!modalVisible)
    }

    let modal = (
        <dialog open>
            <article>
                <p>
                    {selectedCondition} : {conditionText[selectedCondition].map(ln => <div>{ln}</div>)}
                </p>
                <footer>
                    <button onClick={() => toggleModal()}>Close</button>
                </footer>
            </article>
        </dialog>
    )



    if (!dead) {
        if (hp === "0") setDead(true)
    }
    else {
        if (hp !== "0") setDead(false)
    }


    return (
        <>
            {!dead
                ?
                <article className="plaque" >
                    <div style={{display:"flex", justifyContent: "space-between"}}>
                        {nameHidden
                            ?
                            <div id="name" onClick={() => setNameHidden(false)}>{props.name}</div>
                            :
                            <>
                                <input type={"text"} placeholder={props.name} id="name" onChange={(e) => setName(e.target.value)} onMouseOut={(e) => {
                                    updatePlaqueName({ "name": name })
                                    setNameHidden(true)
                                }
                                } />
                            </>
                        }
                        {props.monsterId !== null && props.monsterId !== undefined ?
                            <Link to={linkString} target="_blank" rel="noopener noreferrer" style={{ position: "relative", top: "-31px"}}>📋</Link>
                            :
                            <></>
                        }
                    </div>
                    <div className='charNums' >
                        <input id="hp" type="text" placeholder={props.hp} onChange={(e) => setHp(e.target.value)} />
                        <input id="ac" type="text" value={props.ac} />
                        <input id="init" type="text" value={props.init} />
                    </div>
                    <ul className="shownStatus">
                        {rndrConditions()}
                    </ul>
                </article>
                :
                <article className="plaque" >
                    <div>
                        <div id="name">{props.name}</div>
                    </div>
                    <div className='charNums'>
                        <input id="hp" type="text" placeholder={props.hp} onChange={(e) => setHp(e.target.value)} />
                        <input id="ac" type="text" value={props.ac} />
                        <input id="init" type="text" value={props.init} onChange={(e) => updatePlaque({ "init": e.target.value })} />
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "14px" }}>
                        <div>Fail:</div>
                        <input style={{ marginTop: "1px" }} type="checkbox"></input>
                        <input style={{ marginTop: "1px" }} type="checkbox"></input>
                        <input style={{ marginTop: "1px" }} type="checkbox"></input>
                        <div>Save:</div>
                        <input style={{ marginTop: "1px" }} type="checkbox"></input>
                        <input style={{ marginTop: "1px" }} type="checkbox"></input>
                        <input style={{ marginTop: "1px" }} type="checkbox"></input>
                    </div>
                </article>
            }
            {modalVisible && modal}
        </>

    )
}
