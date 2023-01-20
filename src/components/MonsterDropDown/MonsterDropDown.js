import React from 'react';
import './MonsterDropDown.css';

export default function MonsterDropDown(props){

    return(
        <>
            <select>
                <option value="" disabled selected>Select</option>
                {props.monsterList.map(m => <option>{m.name}</option>)}
            </select>
        </>
    );
}
