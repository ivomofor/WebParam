import React from 'react';
import {Link} from 'react-router-dom';

export default function Nav(){
    const navStyle = {
        color: 'lightcyan'
    }
    return (
        <nav>
            <h3>logo</h3>
            <ul className='nav-links'>
                <Link style={navStyle} to='/'><li>Home</li></Link>
            </ul>
        </nav>
    );
}