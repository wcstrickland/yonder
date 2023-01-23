import React from 'react';
import './SkillCheckList.css';
import SkillCheck from '../SkillCheck/SkillCheck';

export default function SkillCheckList(props) {

    let skills = props.skills
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
                {skills.map((sk, idx) => <SkillCheck prof={sk["prof"]} mod={mods[idx]} skill={sk["skill"]} bonus={sk["prof"] === "y" ? sk["mod"] + parseInt(props.profBonus) : sk["mod"]} />)}
            </article>
        </>
    );
}
