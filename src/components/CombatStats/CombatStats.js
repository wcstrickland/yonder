import React, {useState} from 'react';
import './CombatStats.css';
import OutComeModal from '../OutComeModal/OutComeModal';

export default function CombatStats(props) {

    // let stats = {
    //     "ac": 14,
    //     "hp": 20,
    //     "maxHp": 40,
    //     "speed": 30,
    //     "prof": 2,
    //     "initiative": 2
    // }
    let stats = props.stats


    function useInput(opts) {
        const [value, setValue] = React.useState(parseInt(stats['hp']));
        const input = <input style={{width: "70px", height: "30px", marginTop:"1em"}}
            value={value}
            onChange={e => setValue(parseInt(e.target.value))}
            {...opts} />

        return [value, input];
    }

    const [hp, hpInput] = useInput()    

    const [modalVisible, setModalVisible] = useState(false)

    function closeModal(){
        setModalVisible(false)
    }


    return (
        <>
            <div className='container'>
                <article className='combat-stat-line'>
                    <div className='Stat'>
                        <div className='combat-stat-header'>AC</div>
                        <div className='combat-stat-header'>{stats["ac"]}</div>
                    </div>
                    <div className='Stat'>
                        <div className='combat-stat-header'>HP</div>
                        <div className='combat-stat-header'>{hpInput}/{stats["maxHp"]}</div>
                    </div>
                    <div className='Stat'>
                        <div className='combat-stat-header'>Speed</div>
                        <div className='combat-stat-header'>{stats["speed"]}</div>
                    </div>
                    <div className='Stat'>
                        <div className='combat-stat-header'>Prof</div>
                        <div className='combat-stat-header'>{stats["prof"]}</div>
                    </div>
                    <div className='Stat'>
                        <div className='combat-stat-header'>Initiative</div>
                        <div className='combat-stat-header' style={{cursor: "pointer"}} onClick={()=>setModalVisible(true)}>{stats["initiative"]}</div>
                    </div>
                </article>
            </div>
            {modalVisible && <OutComeModal closeModal={closeModal} sides={20} number={1} mod={stats["initiative"]} />}
        </>
    );
}
