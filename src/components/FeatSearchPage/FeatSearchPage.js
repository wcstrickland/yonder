import React from 'react';
import './FeatSearchPage.css';
import featJson from '../../resource/json/all_Feats.json'
import FeatDropDown from '../FeatDropDown/FeatDropDown';

export default function FeatSearchPage() {

    const feats = featJson["feats"]

    return (
        <>
            <div className='FeatSearchPage container'>
                <article>
                    <FeatDropDown featList={feats} />
                </article>
            </div>
        </>
    );
}
