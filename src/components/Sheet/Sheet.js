import React from 'react';
import './Sheet.css';
import SheetSection from '../SheetSection/SheetSection';

function Sheet(props){

    const monster = props.entity

    const properties = []

    for (const prop in monster) {
        properties.push({"property": prop, "value": monster[prop], "children" : monster[prop].constructor === Array})
    }


    return(
        <>
        <div>{monster.name}</div>
            {properties.map(pr => <SheetSection property={pr.property} value={pr.value} children={pr.children} />)}
        </>
    );
}

export default Sheet;
