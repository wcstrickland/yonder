import React from 'react';
import './SkillCheckList.css';
import SkillCheck from '../SkillCheck/SkillCheck';

export default function SkillCheckList(props) {

    let skills = ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival"]
    let mods = ["DEX", "WIS", "INT", "STR", "CHA", "INT", "WIS", "CHA", "INT", "WIS", "INT", "WIS", "CHA", "CHA", "INT", "DEX", "DEX", "WIS"]

    return (
        <>
            <article>
                <div className='skills-header-row'>
                    <div>Prof</div>
                    <div>Mod</div>
                    <div>Skill</div>
                    <div>Bonus</div>
                </div>
                {Array(18).fill(1).map((sk, idx) => <SkillCheck prof={"Yes"} mod={mods[idx]} skill={skills[idx]} bonus={1} />)}
            </article>
        </>
    );
}
