import React from 'react';
import './Feat.css';

export default function Feat(props) {
    let { name, prereq, text, modifier, prof } = props

    let featFooter = (
        <footer>
            {modifier !== undefined && `${modifier._category} : ${modifier.__text}`}
            <br />
            {prof !== undefined && `Proficiency: +${prof}`}
        </footer>
    )

    let preReq = (
        <>
            <br /><br />
            Prerequisite: {prereq}
        </>
    )

    let featHeader = (
        <header>
            {name}
            {(prereq !== undefined && prereq !== "") && preReq}
        </header>
    )

    return (
        <>
            <article className='Feat'>
                <article>
                    {featHeader}
                    {text}
                    {(modifier !== undefined || prof !== undefined) && featFooter}
                </article>
            </article>
        </>
    );
}
