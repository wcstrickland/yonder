import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Fuse from 'fuse.js';
import './FeatDropDown.css';

export default function FeatDropDown(props) {

    let featIdxByName = {}
    props.featList.map((e, idx) => featIdxByName[e["name"]] = idx)

    const navigate = useNavigate()

    function handleSelectChange(ev) {
        let value = ev.target.value
        let idx = featIdxByName[value]
        navigate(`/feat/${idx}`)
    }

    const options = {
        keys: ['name', "prerequisite", "text", "modifier.__text"]
    }

    let searchList = props.featList

    const [searchValue, setSearchValue] = useState('')
    const [stat, setStat] = useState('')
    const [skill, setSkill] = useState('')

    let stats = ["Dexterity", "Wisdom", "Inteligence", "Strength", "Charisma", "Constitution"]
    let skills = ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival"]


    let fuse = new Fuse(searchList, options)

    if (stat !== "") {
        // searchList = searchList.filter(x => {
        //     return (x.modifier !== undefined && x.modifier.__text !== undefined && x.modifier.__text.includes(stat))
        // })
        console.log(fuse.search(stat))
        searchList = fuse.search(stat)
        fuse = new Fuse(searchList, options)
    }

    if (skill !== "") {
        searchList = fuse.search(skill)
        fuse = new Fuse(searchList, options)
    }

    if(searchValue !== ""){
        searchList = fuse.search(searchValue)
    }

    let selectValues = (stat === "" && skill === "" && searchValue === "")
        ? props.featList.map(f => <option>{f.name}</option>)
        : searchList.map(r => <option>{r.item.name}</option>)
         


    return (
        <>

            <select onChange={(e) => handleSelectChange(e)}>
                <option value="" disabled selected>Select</option>
                {selectValues}
            </select>

            <select onChange={(e) => setStat(e.target.value.toString())}>
                <option value="" disabled selected>Stat</option>
                <option value="" >All</option>
                {stats.map(m => <option>{m}</option>)}
            </select>

            <select onChange={(e) => setSkill(e.target.value.toString())}>
                <option value="" disabled selected>Skill</option>
                <option value="" >All</option>
                {skills.map(m => <option>{m}</option>)}
            </select>

            <input value={searchValue} placeholder={"search"} onChange={(e) => setSearchValue(e.target.value)} type={"text"}></input>

            <div style={{display:"flex", justifyContent: "center"}}>
                <Link to="/allfeats" style={{marginTop:"1em", width:"150px", height:"75px"}}>All Feats</Link>
            </div>
        </>
    );
}
