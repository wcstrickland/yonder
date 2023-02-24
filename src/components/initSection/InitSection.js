import React, { useState } from 'react';
import './initSection.css';

export default function InitSection(props) {

    function handleChange(newVal) {
        if (props.locked) {

        } else {
            props.changer(props.number, newVal, props.id)
        }
    }

    return (
        <>
            <div className='initSection'>
                <div>{props.number}</div>
                {props.locked 
                  ?
                    <input value={""} placeholder={props.val} type={"text"} onChange={(e) => {
                        handleChange(e.target.value)
                    }}></input>
                  :
                    <input placeholder={props.val} type={"text"} onChange={(e) => {
                        handleChange(e.target.value)
                    }}></input>
                }
                <button onClick={() => props.remover(props.id)} style={{maxWidth: "50px", marginTop: "1em"}}>X</button>
            </div>
        </>
    );
}
