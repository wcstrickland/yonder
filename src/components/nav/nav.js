import React from 'react';
import './nav.css';

function Nav() {
    return (
        <>
            <nav className='nav'>
                <ul>
                    <li style={{marginLeft : "1em"}}><strong>Brand</strong></li>
                </ul>
                <ul>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                    <li style={{marginRight: "1em"}}><a href="#" role="button">Button</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;
