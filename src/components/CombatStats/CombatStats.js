import React, {useState} from 'react';
import './CombatStats.css';

export default function CombatStats(props) {

    let stats = {
        "ac": 14,
        "hp": 20,
        "maxHp": 40,
        "speed": 30,
        "prof": 2,
        "initiative": 2
    }


    function useInput(opts) {
        const [value, setValue] = React.useState(stats['hp']);
        const input = <input style={{width: "70px", height: "30px", marginTop:"1em"}}
            value={value}
            onChange={e => setValue(e.target.value)}
            {...opts} />

        return [value, input];
    }

    const [hp, hpInput] = useInput()    



    return (
        <>
            <div className='container'>
                <article className='combat-stat-line'>
                    <div className='Stat'>
                        <div className='stat-header'>AC</div>
                        <div className='stat-header'>{stats["ac"]}</div>
                    </div>
                    <div className='Stat'>
                        <div className='stat-header'>HP</div>
                        <div className='stat-header'>{hpInput}/{stats["maxHp"]}</div>
                    </div>
                    <div className='Stat'>
                        <div className='stat-header'>Speed</div>
                        <div className='stat-header'>{stats["speed"]}</div>
                    </div>
                    <div className='Stat'>
                        <div className='stat-header'>Prof</div>
                        <div className='stat-header'>{stats["prof"]}</div>
                    </div>
                    <div className='Stat'>
                        <div className='stat-header'>Initiative</div>
                        <div className='stat-header'>{stats["initiative"]}</div>
                    </div>
                </article>
            </div>
        </>
    );
}
