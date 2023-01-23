import React from 'react';
import './CharacterDetail.css';
import SheetSection from '../SheetSection/SheetSection';

export default function CharacterDetail(props) {
    const character = props.entity

    const properties = []
    let nonDetails = ["name", "skills", "size", "type", "ac", "hp", "speed", "str", "dex", "con", "int", "wis", "cha", "prof", "initiative"]

    for (const prop in character) {
        if(!nonDetails.includes(prop)){
            properties.push({ "property": prop, "value": character[prop], "children": character[prop].constructor === Array })
        }
    }


    return (
        <>
            <div className='character-detail-container'>
                {properties.map(pr => <SheetSection property={pr.property} value={pr.value} children={pr.children} />)}
            </div>
        </>
    );
}
