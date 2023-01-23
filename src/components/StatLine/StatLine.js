import React from 'react';
import './StatLine.css';
import Stat from '../Stat/Stat';

export default function StatLine(props){
    let stats = props.stats

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
