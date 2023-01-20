import React from 'react';
import { useParams } from "react-router-dom"
import './MonsterPage.css';
import monsterJson from '../../resource/json/monsters.json'
import Sheet from '../../components/Sheet/Sheet'


export default function MonsterPage(){
    const { id } = useParams()
    const monsters = monsterJson["monsters"]
    const monster = monsters[parseInt(id)]

    return(
        <>
            <div className='MonsterPage container'>
                <Sheet entity={monster}/>
            </div>
        </>
    );
}




