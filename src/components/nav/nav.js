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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/character">Character</Link></li>
                    <li><Link to="/test">test</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;
