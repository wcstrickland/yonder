import React from 'react';
import { useParams } from 'react-router-dom';
import './SpellPage.css';
import spellJson from '../../resource/json/all_Spells.json'
import Spell from '../Spell/Spell';

export default function SpellPage(){
    const { id } = useParams()
    const spells = spellJson["spells"]
    const spell = spells[parseInt(id)]
    console.log(spell)

    return(
        <>
            <div className='FeatPage container'>
                <Spell name={spell.name} classes={spell.classes} level={spell.level} school={spell.school} ritual={spell.ritual} time={spell.time} range={spell.range} components={spell.components} duration={spell.duration} text={spell.text} rolls={spell.roll}/>
            </div>
        </>
    );
}