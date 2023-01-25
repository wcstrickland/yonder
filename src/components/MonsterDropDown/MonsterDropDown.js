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

    let searchList = props.monsterList

    const [searchValue, setSearchValue] = useState('')
    const [cr, setCr] = useState("")
    const [type, setType] = useState("")
    const monsterTypes = ["aberration", "beast", "celestial", "construct", "dragon", "elemental", "fey", "fiend", "giant", "humanoid","humanoid (shapechanger)", "humanoid (elf)","humanoid (half-elf)","humanoid (human)","monstrosity", "ooze", "plant", "undead"]
    const crValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13","14", "15","16", "17","18", "19","20", "21", "22", "23","24", "25","26", "27","28", "29","30"]

    if(cr !== ""){
        searchList = searchList.filter(x => x.cr === cr)
    }

    if(type !== ""){
        searchList = searchList.filter(x => x.type === type)
    }

    const fuse = new Fuse(searchList, options)
    const result = fuse.search(searchValue)

    return (
        <>

            <select onChange={(e) => handleSelectChange(e)}>
                <option value="" disabled selected>Select</option>
                {searchValue === ""
                ? searchList.map((m ) => <option>{m.name}</option>)
                : result.slice(0,10).map(r => <option>{r.item.name}</option> )
                }
            </select>


            <select  onChange={(e)=> setCr(e.target.value.toString())}>
                <option value="" disabled selected>CR</option>
                <option value="" >All</option>
                {crValues.map(m => <option>{m}</option>)}
            </select>

            <select  onChange={(e)=> setType(e.target.value.toString())}>
                <option value="" disabled selected>Type</option>
                <option value="" >All</option>
                {monsterTypes.map(m => <option>{m}</option>)}
            </select>

            <input value={searchValue} placeholder={"search"} onChange={(e) => setSearchValue(e.target.value)} type={"text"}></input>
        </>
    );
}
