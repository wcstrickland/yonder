import React from 'react';
import './Spell.css';
import RollerButton from '../RollerButton/RollerButton';

export default function Spell({ name, classes, level, school, ritual, time, range, components, duration, text, rolls }) {

    if(rolls !== undefined && rolls.constructor!== Array){
        rolls = [rolls]
    }

    function parseRollString(rollString) {
        let numDice = ""
        let numDiceSet = false
        let sides = ""
        for (let char of rollString) {
            if (!numDiceSet) {
                numDice += char
            } 
            if (char === "d") {
                numDiceSet = true
                continue
            }
            
            if(numDiceSet){
                sides += char
            }
        }
        
        return [parseInt(numDice), parseInt(sides)]
    }


    let rollButtons;

    if(rolls !== undefined){
        rollButtons = rolls.map(r => <RollerButton sides={parseRollString(r)[1]} number={parseRollString(r)[0]} mod={""}/>)
    }
  
    let rollFooter = (
        <footer>
            <details>
                <summary>Rolls</summary>
                {rollButtons}
            </details>
        </footer>
    )



    return (
        <>
            <article className='Spell'>
                <header>
                    <div style={{ display: "flex" }}><strong>{name}</strong><div style={{ marginLeft: "1em" }}>Level: {level}</div><div style={{ marginLeft: "auto" }}>Ritual: {ritual}</div></div>
                    <div style={{ display: "flex", marginTop: "1em" }}><div>{classes}: </div><div style={{ marginLeft: "1em" }}>School: {school}</div></div>

                </header>
                <article>
                    <header>
                        <div className='SpellProperties'>
                            <div>Time: {time}</div>
                            <div>Range: {range}</div>
                            <div>Duration: {duration}</div>
                        </div>
                    </header>
                    {text}
                    <footer>
                        <div>Components: {components}</div>
                    </footer>
                </article>
                {rolls && rollFooter}
            </article>
        </>
    );
}
