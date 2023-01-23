import React, {useState} from 'react';
import StatLine from '../StatLine/StatLine';
import './CharSheet.css';
import SkillCheckList from '../SkillCheckList/SkillCheckList'
import CombatStats from '../CombatStats/CombatStats';
import OutComeModal from '../OutComeModal/OutComeModal'

export default function CharSheet(props) {

    const [modalVisible, setModalVisible] = useState(false)

    function closeModal(){
        setModalVisible(false)
    }


    return (
        <>
            <StatLine />
            <CombatStats />
            <div style={{display: "flex", justifyContent: "space-around"}}>
                <div className='grid' style={{ width: "75%" }}>
                    <div>
                        <SkillCheckList />
                    </div>
                    <div>
                        <article></article>
                    </div>
                </div>
            </div>
            {modalVisible && <OutComeModal closeModal={closeModal}/>}
        </>
    );
}
