import React from 'react';
import { useParams } from "react-router-dom"
import './MonsterPage.css';
import monsterJson from '../../resource/json/all_monsters.json'
import MonsterSheet from '../MonsterSheet/MonsterSheet';


export default function MonsterPage(){
    const { id } = useParams()
    const monsters = monsterJson["monsters"]
    const monster = monsters[parseInt(id)]
    

    return(
        <>
            <div className='MonsterPage container'>
                <MonsterSheet entity={monster}/>
            </div>
        </>
    );
}




