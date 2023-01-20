import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

function Nav() {
    return (
        <>
            <nav className='nav'>
                <ul>
                    <li style={{marginLeft : "1em"}}><strong>Brand</strong></li>
                </ul>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/monsters">Monsters</Link></li>
                    <li style={{marginRight: "1em"}}><a href="#" role="button">Button</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;
