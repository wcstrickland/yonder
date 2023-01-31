import React from 'react';
import { useParams } from 'react-router-dom';
import './FeatPage.css';
import featJson from '../../resource/json/all_Feats.json'
import Feat from '../Feat/Feat';

export default function FeatPage(){
    const { id } = useParams()
    const feats = featJson["feats"]
    const feat = feats[parseInt(id)]

    return(
        <>
            <div className='FeatPage container'>
                <Feat name={feat.name} prereq={feat.prerequisite} text={feat.text} modifier={feat.modifier} prof={feat.proficiency} />
            </div>
        </>
    );
}
