import React from 'react';
import './SkillCheck.css';

export default function SkillCheck(props) {
    let prof  = props.prof
    let mod   = props.mod
    let skill = props.skill
    let bonus = props.bonus


    let skillPad = Math.floor((20 - skill.length)/2)

    skill = skill + String.fromCharCode(160).repeat(skillPad * 2)
    skill = skill.slice(0,18)

    return (
        <>
        <hr></hr>
            <div className='skill-row'>
                <div style={{marginRight: "auto"}}>{ prof }</div>
                <div style={{marginLeft: "auto", marginRight: "auto"}}>{ mod }</div>
                <div style={{marginLeft: "auto"}}>{ skill }</div>
                <div style={{marginLeft: "auto"}}>{ bonus }</div>
            </div>
        </>
    );
}
