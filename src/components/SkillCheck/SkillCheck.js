import React, {useState} from 'react';
import OutComeModal from '../OutComeModal/OutComeModal';
import './SkillCheck.css';

export default function SkillCheck(props) {
    let prof  = props.prof
    let mod   = props.mod
    let skill = props.skill
    let bonus = props.bonus



    let skillPad = Math.floor((20 - skill.length)/2)

    skill = skill + String.fromCharCode(160).repeat(skillPad * 2)
    skill = skill.slice(0,18)



    const [modalVisible, setModalVisible] = useState(false)

    function closeModal(){
        setModalVisible(false)
    }

    return (
        <>
        <hr></hr>
            <div className='skill-row'>
                <div style={{marginRight: "auto"}}>{ prof }</div>
                <div style={{marginLeft: "auto", marginRight: "auto"}}>{ mod }</div>
                <div style={{marginLeft: "auto"}}>{ skill }</div>
                <div style={{marginLeft: "auto", cursor: "pointer"}} onClick={()=> setModalVisible(true)}>{ bonus }</div>
            </div>
            {modalVisible && <OutComeModal closeModal={()=> closeModal()}sides={20} number={1} mod={bonus}/> }
        </>
    );
}
