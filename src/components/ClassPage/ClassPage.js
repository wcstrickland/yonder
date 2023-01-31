import React from 'react';
import { useParams } from 'react-router-dom';
import './ClassPage.css';
import classJson from '../../resource/json/new_classes.json'
import ClassFeature from '../ClassFeature/ClassFeature';

export default function ClassPage(){

    const{cls, id} = useParams()
    const item = classJson[cls]["autolevel"][id]
    


    return(
        <>
            <div className='ClassPage container'>
                <ClassFeature name={item.feature.name} text={item.feature.text} optional={item.feature.optional} level={item.level}/>
            </div>
        </>
    );
}
