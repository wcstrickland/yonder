import React, { useState } from 'react';
import './Plaque.css';


export default function Plaque(props) {

    const [hp, setHp] = useState(props.hp)
    const [statusHidden, setStatusHidden] = useState(true)

    function handleOnMouse() {
        setStatusHidden(false)
    }

    function handleOffMouse() {
        setStatusHidden(true)
    }

    return (
        <>
            <article className='plaque' onMouseOver={handleOnMouse} onMouseOut={handleOffMouse}>
                <div onClick={() => props.removeFunc()} id={"closeButton"}>x</div>
                <div className='charNums'>
                    <input id="hp" type="text" placeholder={props.hp} onChange={(e) => setHp(e.target.value)} />
                    <input id="ac" type="text" value={props.ac} />
                    <input id="init" type="text" value={props.init} />
                    <div className={statusHidden ? "plaqueDetail" : "plaqueDetailHidden"}>
                        <div id="name">{props.name}</div>
                    </div>
                </div>
                <ul className={statusHidden ? "hiddenStatus" : "shownStatus"}>
                    <div style={{ display: "flex" }}>
                        <input type={"checkbox"} id="poisoned" name="poisoned"></input>
                        <label htmlFor='poisoned'>poisoned</label>
                    </div>
                    <div style={{ display: "flex" }}>
                        <input type={"checkbox"} id="frightened" name="frightened"></input>
                        <label htmlFor='frightened'>frightened</label>
                    </div>
                    <div style={{ display: "flex" }}>
                        <input type={"checkbox"} id="paralyzed" name="paralyzed"></input>
                        <label htmlFor='paralyzed'>paralyzed</label>
                    </div>
                    <div style={{ display: "flex" }}>
                        <input type={"checkbox"} id="restrained" name="restrained"></input>
                        <label htmlFor='restrained'>restrained</label>
                    </div>
                    <div style={{ display: "flex" }}>
                        <input type={"checkbox"} id="charmed" name="charmed"></input>
                        <label htmlFor='charmed'>charmed</label>
                    </div>
                    <div style={{ display: "flex" }}>
                        <input type={"checkbox"} id="petrified" name="petrified"></input>
                        <label htmlFor='petrified'>petrified</label>
                    </div>
                </ul>
            </article>
        </>

    )
}
