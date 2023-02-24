import React, { useState } from 'react';
import './initiative.css';
import InitSection from '../initSection/InitSection';


let vals = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]



export default function Initiative() {
    const [isPurged, setIsPurged] = useState(false)

    const [sects, setSects] = useState([
        { "num": 25, "val": "", "id": 25 },
        { "num": 24, "val": "", "id": 24 },
        { "num": 23, "val": "", "id": 23 },
        { "num": 22, "val": "", "id": 22 },
        { "num": 21, "val": "", "id": 21 },
        { "num": 20, "val": "", "id": 20 },
        { "num": 19, "val": "", "id": 19 },
        { "num": 18, "val": "", "id": 18 },
        { "num": 17, "val": "", "id": 17 },
        { "num": 16, "val": "", "id": 16 },
        { "num": 15, "val": "", "id": 15 },
        { "num": 14, "val": "", "id": 14 },
        { "num": 13, "val": "", "id": 13 },
        { "num": 12, "val": "", "id": 12 },
        { "num": 11, "val": "", "id": 11 },
        { "num": 10, "val": "", "id": 10 },
        { "num": 9, "val": "", "id": 9 },
        { "num": 8, "val": "", "id": 8 },
        { "num": 7, "val": "", "id": 7 },
        { "num": 6, "val": "", "id": 6 },
        { "num": 5, "val": "", "id": 5 },
        { "num": 4, "val": "", "id": 4 },
        { "num": 3, "val": "", "id": 3 },
        { "num": 2, "val": "", "id": 2 },
        { "num": 1, "val": "", "id": 1 },
        { "num": 0, "val": "", "id": 0 }
    ])

    function changeText(idx, newValue, id) {
        let newSects = sects
        newSects[25 - idx] = { "num": idx, "val": newValue, "id": id }
        setSects(newSects)
    }

    function remover(id) {
        let newSects = sects
        newSects = newSects.filter(s => s.id !== id)
        setSects(newSects)
    }


    function purge() {
        if (sects.length > 0) {
            let newSects = sects.filter(s => s.val !== "")
            setSects(newSects)
        }else{

        }
    }

    function cycle() {
        console.log(sects)
        if (sects.length > 0) {
            let newSects = sects
            let newEnd = newSects[0]
            newSects = newSects.slice(1, newSects.length)
            newSects.push(newEnd)
            setSects(newSects)
            console.log(sects)
        } else {
        }
    }

    let purgedButton = <button onClick={() => { cycle() }}>Next</button>
    let notPurgedButton = <button onClick={() => {
        purge()
        console.log(sects)
        setIsPurged(true)
    }}>Next</button>

    return (
        <>
            <div className='container'>
                <article>
                    <header>Initiative</header>
                    {isPurged ?
                        sects.map(s => <InitSection number={s.num} val={s.val} id={s.id} remover={remover} locked={true} changer={changeText} />)
                        :
                        sects.map(s => <InitSection number={s.num} val={s.val} id={s.id} remover={remover} locked={false} changer={changeText} />)
                    }
                    <footer>
                        {isPurged ? purgedButton : notPurgedButton}
                    </footer>
                </article>
            </div>
        </>
    );
}
