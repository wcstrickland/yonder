import React, {useState} from 'react';
import './Stat.css';
import OutComeModal from '../OutComeModal/OutComeModal';

export default function Stat(props){

    let stat = props.stat
    let statModifier = props.statModifier
    let statValue = props.statValue

    const [modalVisible, setModalVisible] = useState(false)

    function closeModal(){
        setModalVisible(false)
    }

    return(
        <>
            <div className='Stat'>
                <div className='stat-header'><span>{stat}</span> </div>
                <div className='stat-modifier' onClick={()=>setModalVisible(true)}><span>+</span>{statModifier}</div>
                <div className='stat-value'>{statValue}</div>
            </div>
            {modalVisible && <OutComeModal closeModal={closeModal} sides={20} number={1} mod={statModifier} />}
        </>
    );
}
