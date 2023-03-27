import React, { useState } from 'react';
import './Plaque.css';
import { Link, useNavigate } from 'react-router-dom';
import monsterJson from '../../resource/json/all_monsters.json'


export default function Plaque(props) {

    const [hp, setHp] = useState(props.hp)
    const [init, setInit] = useState(props.init)
    const [name, setName] = useState(props.name)
    const [nameHidden, setNameHidden] = useState(true)
    const [conditions, setConditions] = useState({ ...props.conditions })
    const [dead, setDead] = useState(false)

    const navigate = useNavigate()
    const monsters = monsterJson["monsters"]
    let monsterIdxByName = {}
    monsters.map((e, idx) => monsterIdxByName[e["name"]] = idx)


    let linkString = `/monster/${props.monsterId}`
    function handleSelectChange() {
    }


    function updatePlaque(newValObj) {
        let nwPlq = {
            "name": newValObj["name"] || props.name,
            "ac": newValObj["ac"] || props.ac,
            "hp": newValObj["hp"] || props.hp,
            "init": newValObj["init"] || props.init,
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
            outputArr.map(c => <div style={{ display: "flex" }}><input type={"checkbox"} id={Object.keys(c)[0]} name={Object.keys(c)[0]} ></input><label  >{Object.keys(c)[0]}</label></div>)
        )
    }

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
                    <div>
                        {nameHidden
                            ?
                            <div id="name" onClick={()=> setNameHidden(false)}>{props.name}</div>
                            :
                            <>
                                <input type={"text"} placeholder={props.name} id="name" onChange={(e)=> setName(e.target.value)} onMouseOut={(e) => {
                                    updatePlaqueName({"name": name})
                                    setNameHidden(true)}
                                    }/>
                            </>
                        }
                        {/* <div onClick={()=>handleSelectChange()} style={{position: "relative", top:"-40px", left:"230px"}}>X</div> */}
                        <Link to={linkString} target="_blank" rel="noopener noreferrer" style={{position: "relative", top:"-40px", left:"230px"}}>O</Link>
                    </div>
                    <div className='charNums' >
                        <input id="hp" type="text" placeholder={props.hp} onChange={(e) => setHp(e.target.value)} />
                        <input id="ac" type="text" value={props.ac} />
                        <input id="init" type="text" value={props.init}  />
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
                        <input id="hp" type="text" placeholder={props.hp} onChange={(e) => updatePlaque({ "hp": e.target.value })} />
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
        </>

    )
}
