import React from 'react';
import './Tooltip.css';

export default function Tooltip(props){
    return(
        <>
        <div onMouseOut={()=> props.toggleFunc(false)} className={props.conditionHidden ? "tooltipShown" : "tooltipHidden"}>{props.toolTipText}</div>
        </>
    );
}
