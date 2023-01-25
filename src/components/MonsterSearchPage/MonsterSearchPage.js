import  React from 'react';
import './MonsterSearchPage.css';
import monsterJson from '../../resource/json/all_monsters.json'
import MonsterDropDown from '../MonsterDropDown/MonsterDropDown';


export default function MonsterSearchPage() {

    const monsters = monsterJson["monsters"]

    return (
        <>
            <div className='MonsterSearchPage container'>
                <MonsterDropDown monsterList={monsters}/>
            </div>
        </>
    );
}
