import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SpellDropDown.css';
import Fuse from 'fuse.js';
import SpellList from '../SpellList/SpellList'

export default function SpellDropDown(props) {

    let spellIdxByName = {}
    props.spellList.map((e, idx) => spellIdxByName[e["name"]] = idx)

    const navigate = useNavigate()

    function handleSelectChange(ev) {
        let value = ev.target.value
        let idx = spellIdxByName[value]
        navigate(`/spell/${idx}`)
    }

    const options = {
        keys: ['name', 'classes']
    }

    let searchList = props.spellList

    const [searchValue, setSearchValue] = useState('')
    const [level, setLevel] = useState('')
    const [classes, setClasses] = useState('')
    const [isRitual, setIsRitual] = useState('')
    const [showSpellList, setShowSpellList] = useState(false)

    function toggleSpellList() {
        setShowSpellList(!showSpellList)
    }



    let fuse = new Fuse(searchList, options)

    if (level !== "") {
        searchList = searchList.filter(i => i.level === level)
    }

    if (classes !== "") {
        searchList = searchList.filter(i => i.classes.includes(classes))
    }

    if (searchValue !== "") {
        searchList = fuse.search(searchValue)
    }

    let selectValues = (searchValue === "")
        ? searchList.map(f => <option>{f.name}</option>)
        : searchList.map(r => <option>{r.item.name}</option>)


    const levels = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    const classesValues = ["Bard", "Wizard", "Cleric", "Fighter", "Sorcerer", "Warlock", "Paladin", "Druid", "Ranger", "Barbarian", "Rogue"]

    let searchView = (
        <>
            {/* <fieldset>
                <legend>Ritual</legend>
                <label htmlFor="yes">
                    <input type="radio" id="yes" name="yes" value="yes" >Yes</input>
                </label>
                <label htmlFor="no">
                    <input type="radio" id="no" name="no" value="no">No</input>
                </label>
                <label htmlFor="either">
                    <input type="radio" id="either" name="either" value="either" checked>Either</input>
                </label>
            </fieldset> */}

            <select onChange={(e) => handleSelectChange(e)}>
                <option value="" disabled selected>Select</option>
                {selectValues}
            </select>

            <select onChange={(e) => setLevel(e.target.value.toString())}>
                <option value="" disabled selected>Level</option>
                <option value="" >All</option>
                {levels.map(m => <option>{m}</option>)}
            </select>

            <select onChange={(e) => setClasses(e.target.value.toString())}>
                <option value="" disabled selected>Class</option>
                <option value="" >All</option>
                {classesValues.map(m => <option>{m}</option>)}
            </select>

            <input value={searchValue} placeholder={"search"} onChange={(e) => setSearchValue(e.target.value)} type={"text"}></input>

            <div style={{display:"flex", justifyContent: "center"}}>
                <button onClick={() => toggleSpellList()} style={{marginTop:"1em", width:"140px", height:"65px"}}>Search</button>
            </div>
        </>
    )

    let spellListView = (
        <SpellList needParseItems={searchValue!==""} goBack={toggleSpellList} spells={searchList} />
    )

    let outPut = showSpellList ? spellListView : searchView

    return (
        outPut
    );
}
