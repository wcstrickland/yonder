import React from 'react';
import './FeatList.css';
import featJson from '../../resource/json/all_Feats.json'
import Feat from '../Feat/Feat';

export default function FeatList(props) {
    const feats = featJson["feats"]

    return (
        <>
            <div className='FeatList container'>
                {feats.map(f => <Feat name={f.name} prereq={f.prerequisite} text={f.text} modifier={f.modifier} prof={f.proficiency} />)}
            </div>
        </>
    );
}
