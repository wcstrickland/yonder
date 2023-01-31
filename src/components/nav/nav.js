import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

function Nav() {
    return (
        <>
            <nav className='nav'>
                <ul>
                    <li style={{marginLeft : "1em"}}><strong>Yonder</strong></li>
                </ul>
                <ul style={{marginRight : "2em"}}>
                    <li><Link to="/">Monsters</Link></li>
                    <li><Link to="/feats">Feats</Link></li>
                    <li><Link to="/spells">Spells</Link></li>
                    <li><Link to="/classes">Classes</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;
