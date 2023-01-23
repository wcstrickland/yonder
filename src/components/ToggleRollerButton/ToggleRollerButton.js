import React, {useState} from 'react';
import Roller from '../Roller/Roller';
import './ToggleRollerButton.css';

export default function ToggleRollerButton(){



    const [modalVisible, setModalVisible] = useState(false)

    function closeModal(){
        setModalVisible(false)
    }


    return(
        <>
            <button className='ToggleRollerButton' onClick={()=> setModalVisible(true)}>Roll</button>
            {modalVisible && <Roller closeModal={()=>closeModal()} />}
        </>
    );
}
