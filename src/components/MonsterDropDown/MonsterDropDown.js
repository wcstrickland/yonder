import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Fuse from 'fuse.js';

import './MonsterDropDown.css';

export default function MonsterDropDown(props) {

    let monsterIdxByName = {} 
    props.monsterList.map((e, idx) => monsterIdxByName[e["name"]] = idx)


    const navigate = useNavigate()

    function handleSelectChange(ev) {
        let value = ev.target.value
        let idx = monsterIdxByName[value]
        navigate(`/monster/${idx}`)
    }

    const options = {
        keys: ['name']
    }

    const fuse = new Fuse(props.monsterList, options)


    const [searchValue, setSearchValue] = useState('')
    const result = fuse.search(searchValue)

    return (
        <>
            <input value={searchValue} placeholder={"search"} onChange={(e) => setSearchValue(e.target.value)} type={"text"}></input>

            <select onChange={(e) => handleSelectChange(e)}>
                <option value="" disabled selected>Select</option>
                {searchValue === ""
                ? props.monsterList.map((m ) => <option>{m.name}</option>)
                : result.slice(0,10).map(r => <option>{r.item.name}</option> )
                }
            </select>
        </>
    );
}
