import React, { useState } from 'react';
import './Plaque.css';


export default function Plaque(props) {

    const [hp, setHp] = useState(props.hp)
    const [init, setInit] = useState(props.init)
    const [conditions, setConditions] = useState({ ...props.conditions })
    const [dead, setDead] = useState(false)



    function updatePlaque(cond, val) {
        let nwPlq = {
            "name": props.name,
            "ac": props.ac,
            "hp": hp,
            "init": init,
            "id": props.id,
            "conditions": { ...conditions }
        }
        props.updateFunc(nwPlq)
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

    if(!dead){
        if(hp === "0")setDead(true)
    }
    else{
        if(hp !== "0")setDead(false)
    }

    return (
        <>
            {!dead 
            ? 
            <article className="plaque" >
                    <div>
                        <div id="name">{props.name}</div>
                    </div>
                    <div className='charNums'>
                        <input id="hp" type="text" placeholder={props.hp} onChange={(e) => {
                            setHp(e.target.value)
                        }} />
                        <input id="ac" type="text" value={props.ac} />
                        <input id="init" type="text" value={props.init}/>
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
                        <input id="hp" type="text" placeholder={props.hp} onChange={(e) => {
                            setHp(e.target.value)
                        }} />
                        <input id="ac" type="text" value={props.ac} />
                        <input id="init" type="text" value={props.init} />
                    </div>
                    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "14px"}}>
                       <div>Fail:</div> 
                       <input style={{marginTop: "1px"}} type="checkbox"></input> 
                       <input style={{marginTop: "1px"}} type="checkbox"></input> 
                       <input style={{marginTop: "1px"}} type="checkbox"></input> 
                       <div>Save:</div> 
                       <input style={{marginTop: "1px"}} type="checkbox"></input> 
                       <input style={{marginTop: "1px"}} type="checkbox"></input> 
                       <input style={{marginTop: "1px"}} type="checkbox"></input> 
                    </div>
            </article>
            }
        </>

    )
}
