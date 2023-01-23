import React from 'react';
import './StatLine.css';
import Stat from '../Stat/Stat';

export default function StatLine(props){
    
    // let stats = props.stats
    let stats = [
        {
            "stat": "STR",
            "statModifier": 4,
            "statValue": 10
        },
        {
            "stat": "DEX",
            "statModifier": 4,
            "statValue": 10
        },
        {
            "stat": "CON",
            "statModifier": 4,
            "statValue": 10
        },
        {
            "stat": "INT",
            "statModifier": 4,
            "statValue": 10
        },
        {
            "stat": "WIS",
            "statModifier": 4,
            "statValue": 10
        },
        {
            "stat": "CHA",
            "statModifier": 4,
            "statValue": 10
        },
    ]

    return(
        <>
            <div className='container StatLine'>
                <article className='stat-row grid'>
                    {stats.map(st => <Stat stat={st["stat"]} statModifier={st["statModifier"]} statValue={st["statValue"]}/>)}
                </article>
            </div>
        </>
    );
}
