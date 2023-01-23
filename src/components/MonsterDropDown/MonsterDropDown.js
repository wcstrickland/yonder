import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'

import './MonsterDropDown.css';

export default function MonsterDropDown(props){

    const navigate = useNavigate()

    function handleSelectChange(ev){
        let value = ev.target.value
        let idx = value.match(/\d{1,3}:/)
        idx = idx[0]
        idx = idx.slice(0, idx.length - 1)
        navigate(`/monster/${idx}`)
    }

    return(
        <>
            <select onChange={(e)=> handleSelectChange(e)}>
                <option value="" disabled selected>Select</option>
                {props.monsterList.map((m, idx) => <option>{idx}: {m.name}</option>)}
            </select>
        </>
    );
}
