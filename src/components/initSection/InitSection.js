import React, { useState } from 'react';
import './initSection.css';

export default function InitSection(props) {

    function handleChange(newVal) {
        props.changer(props.number, newVal, props.id)
    }

    function clear() {
        let inputs = document.querySelectorAll("input")
        for (let input of inputs) {
            input.value = ""
        }
    }

    clear()
    return (
        <>
            <div className='initSection'>
                <div style={{ marginRight: "1em" }}>{props.number}</div>
                <input style={{ marginRight: "1em" }} placeholder={props.val} type={"text"} onChange={(e) => {
                    handleChange(e.target.value)
                }}></input>
                <button onClick={() => props.remover(props.id)} style={{ maxWidth: "50px", marginTop: "1em" }}>X</button>
            </div>
        </>
    );
}
