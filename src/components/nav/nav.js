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
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/roller">Roller</Link></li>
                    <li><Link to="/test">test</Link></li>
                    <li style={{marginRight: "1em"}}><a href="#" role="button">Button</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;
