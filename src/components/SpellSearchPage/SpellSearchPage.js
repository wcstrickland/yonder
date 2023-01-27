import React from 'react';
import './SpellSearchPage.css';
import spellJson from '../../resource/json/all_Spells.json'
import SpellDropDown from '../SpellDropDown/SpellDropDown'

export default function SpellSearchPage(){

    const spells = spellJson["spells"]

    return(
        <>
            <div className='SpellSearchPage container'>
                <article>
                    <SpellDropDown spellList={spells} />
                </article>
            </div>
        </>
    );
}
