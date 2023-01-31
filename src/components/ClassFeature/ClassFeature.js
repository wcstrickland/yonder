import React from 'react';
import './ClassFeature.css';

export default function ClassFeature({ name, text, optional, level }) {

    function unScuffJoinedText(txt){
        return (
            txt.map(t => {
                return <p>{t}</p>
            })
        )
    }
    return (
        <>
            <article className='ClassFeature'>
                <header style={{display:"flex"}}><div>{name}</div><div style={{marginLeft:"auto"}}>Level: {level}</div></header>
                {unScuffJoinedText(text)}
                <footer>Optional: {optional}</footer>
            </article>
        </>
    );
}
