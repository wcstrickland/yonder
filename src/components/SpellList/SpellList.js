import React from 'react';
import './SpellList.css';
import Spell from '../Spell/Spell';

export default function SpellList(props){
    // const spells = spellJson["spells"]
    const { needParseItems, spells, goBack } = props
    

    let parsedSpells;
    let nonParseSpells;

    if(needParseItems){
        parsedSpells = spells.map(f => <Spell name={f.item.name} classes={f.item.classes} level={f.item.level} school={f.item.school} ritual={f.item.ritual} time={f.item.time} range={f.item.range} components={f.item.components} duration={f.item.duration} text={f.item.text} rolls={f.item.roll}/>)
    }else{
        nonParseSpells = spells.map(f => <Spell name={f.name} classes={f.classes} level={f.level} school={f.school} ritual={f.ritual} time={f.time} range={f.range} components={f.components} duration={f.duration} text={f.text} rolls={f.roll}/>)
    }
    return(
        <>
            <button className="back-to-spells" onClick={() => goBack()}>Back</button>
            <div className='SpellList container'>
                {needParseItems ? parsedSpells : nonParseSpells}
            </div>
        </>
    );
}
