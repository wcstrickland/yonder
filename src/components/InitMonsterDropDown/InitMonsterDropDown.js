import React, { useState } from 'react';
import Fuse from 'fuse.js';
import monsterJson from '../../resource/json/all_monsters.json'

import './InitMonsterDropDown.css';

export default function InitMonsterDropDown(props) {

    const monsters = monsterJson["monsters"]
    let monsterIdxByName = {}
    monsters.map((e, idx) => monsterIdxByName[e["name"]] = idx)

    const [selectedMonster, setSelectedMonster] = useState("")


    function handleSelectChange(value) {
        console.log("selected Monster")
        console.log(selectedMonster)
        console.log("value")
        console.log(value)
        const abilityModifiers = {
            "1": -5,
            "2": -4,
            "3": -4,
            "4": -3,
            "5": -3,
            "6": -2,
            "7": -2,
            "8": -1,
            "9": -1,
            "10": 0,
            "11": 0,
            "12": 1,
            "13": 1,
            "14": 2,
            "15": 2,
            "16": 3,
            "17": 3,
            "18": 4,
            "19": 4,
            "20": 5,
            "21": 5,
            "22": 6,
            "23": 6,
            "24": 7,
        }
        if(value === ""){
            return
        }
        let idx = monsterIdxByName[value]
        let initRoll = (Math.floor(Math.random() * 20) + 1) + abilityModifiers[monsters[idx].dex]
        let filteredHp = []
        for(let char of monsters[idx].hp){
            if(char !== " " && char !== "("){
                filteredHp.push(char)
            }else{
                break;
            }
        }
        let imune = monsters[idx].conditionImmune.split(",")
        let requestedInitiativeInfo = {
            "nme": monsters[idx].name,
            "ac": monsters[idx].ac.slice(0,2),
            "hp": filteredHp.join(""),
            "init": initRoll,
            "immune": imune,
            "monsterId": idx
        }
    //function addParticipant(nme, ac, hp, init) {
        props.rollInitFunc({"nme":requestedInitiativeInfo.nme, "ac": requestedInitiativeInfo.ac, "hp": requestedInitiativeInfo.hp, "init": requestedInitiativeInfo.init, "monsterId":requestedInitiativeInfo.monsterId})
    }

    const options = {
        keys: ['name']
    }

    let searchList = monsters

    const [searchValue, setSearchValue] = useState('')
    const [cr, setCr] = useState("")
    const [type, setType] = useState("")
    const monsterTypes = ["aberration", "beast", "celestial", "construct", "dragon", "elemental", "fey", "fiend", "giant", "humanoid", "humanoid (shapechanger)", "humanoid (elf)", "humanoid (half-elf)", "humanoid (human)", "monstrosity", "ooze", "plant", "undead"]
    const crValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"]

    if (cr !== "") {
        searchList = searchList.filter(x => x.cr === cr)
    }

    if (type !== "") {
        searchList = searchList.filter(x => x.type === type)
    }

    const fuse = new Fuse(searchList, options)
    const result = fuse.search(searchValue)

    return (
        <>

            <select onChange={(e) => setSelectedMonster(e.target.value)}>
                <option value="" disabled selected>Select</option>
                {searchValue === ""
                    ? searchList.map((m) => <option>{m.name}</option>)
                    : result.slice(0, 10).map(r => <option>{r.item.name}</option>)
                }
            </select>


            <select onChange={(e) => setCr(e.target.value.toString())}>
                <option value="" disabled selected>CR</option>
                <option value="" >All</option>
                {crValues.map(m => <option>{m}</option>)}
            </select>

            <select onChange={(e) => setType(e.target.value.toString())}>
                <option value="" disabled selected>Type</option>
                <option value="" >All</option>
                {monsterTypes.map(m => <option>{m}</option>)}
            </select>

            <input value={searchValue} placeholder={"search"} onChange={(e) => setSearchValue(e.target.value)} type={"text"}></input>
            <button onClick={() => handleSelectChange(selectedMonster)}> Add </button>
        </>
    );
}

