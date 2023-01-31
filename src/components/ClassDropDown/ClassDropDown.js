import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import classJson from '../../resource/json/classes.json'
import Fuse from 'fuse.js';
import './ClassDropDown.css';



export default function ClassDropDown() {
    let searchList;
    let displayList;
    const navigate = useNavigate()

    const classes = ["Wizard", "Barbarian", "Cleric", "Warlock", "Fighter", "Druid", "Ranger", "Sorcerer", "Rogue", "Bard"]
    const levels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16","17", "18", "19","20"]

    const [selectedClass, setSelectedClass] = useState("Cleric")
    const [level, setLevel] = useState("")

    if(selectedClass !== ""){
        searchList = classJson[selectedClass]["autolevel"]
        displayList = searchList
    }else{
        searchList = [] 
        for(let cl in classJson){
            searchList = searchList.concat(cl["autolevel"])
        }
        displayList = searchList
    }
 
    if(level !== ""){
        displayList = displayList.filter(i => i.level === level)
    }

    function handleSelect(ev){
        let value = ev.target.value
        let cls = selectedClass
        
        
        let id = getFeatureIdx(value)
        navigate(`/class/${cls}/${id.toString()}`)
    }

    function getFeatureIdx(value){
        for(let i = 0; i<searchList.length; i++){
            if(searchList[i]["feature"]["name"] === value){
                return i
            }
        }
    }

    searchList = searchList.filter(x => Object.keys(x)[0] === "feature")
    return (
        <>

            <select onChange={(e) => handleSelect(e)}>
                <option value="" disabled selected>Select</option>
                {displayList.map(o => <option>{o.feature.name}</option>)}
            </select>

            <select onChange={(e) => setSelectedClass(e.target.value.toString())}>
                <option value="Cleric" selected>Cleric</option>
                {classes.map(m => <option>{m}</option>)}
            </select>

            <select onChange={(e) => setLevel(e.target.value.toString())}>
                <option value="" disabled selected>Level</option>
                {levels.map(m => <option>{m}</option>)}
            </select>
        </>
    );
}
