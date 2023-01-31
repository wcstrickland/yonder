import React from 'react';
import './ClassSearchPage.css';
import ClassDropDown from '../ClassDropDown/ClassDropDown'

export default function ClassSearchPage() {

    return (
        <>
            <>
                <div className='FeatSearchPage container'>
                    <article>
                        <ClassDropDown/>
                    </article>
                </div>
            </>
        </>
    );
}
