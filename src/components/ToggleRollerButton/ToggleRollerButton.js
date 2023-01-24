import React, { useState } from 'react';
import './ToggleRollerButton.css';
import RollerMenu from '../RollerMenu/RollerMenu';

export default function ToggleRollerButton() {



    const [menuVisible, setMenuVisible] = useState(false)

    function closeMenu() {
        setMenuVisible(false)
    }


    return (
        <>
            <button className='ToggleRollerButton' onClick={() => setMenuVisible(!menuVisible)}>{menuVisible ? "Close" : "Roll" }</button>
            {menuVisible && <RollerMenu />}
        </>
    );
}
