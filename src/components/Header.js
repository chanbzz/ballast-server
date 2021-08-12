import React from 'react';
import './header.css';

export const Header = () => {
    return (
        <div>
            <header id='top-banner'>
                <h1>Hello chan.</h1>
                <a href="/api/logout">Logout</a>   
            </header>
            
        </div>
    )
}

export default Header;
