import React from 'react';
import './MonsterSheet.css';
import SheetSection from '../SheetSection/SheetSection';

function MonsterSheet(props){

    const monster = props.entity

    const properties = []

    for (const prop in monster) {
        properties.push({"property": prop, "value": monster[prop], "children" : monster[prop].constructor === Array})
    }


    return(
        <>
            {properties.map(pr => <SheetSection property={pr.property} value={pr.value} children={pr.children} />)}
        </>
    );
}

export default MonsterSheet;
