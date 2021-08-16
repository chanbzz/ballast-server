import React, { useEffect, useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Question from './Question'


export const Header = (props) => {

    let [user, setUser] = useState("compadre")
    axios.get('/api/current_user')

        .then((response) => {
            console.log(response.data.googleId)
            setUser(response.data.googleId)

        });


    return (
        <div>
            <header id='top-banner'>
                <h1>Ballast. </h1>
                <p id='greeting'>Hello <div class='emphasize-user'>{user}!</div></p>  
            </header>
            
        </div>
    )
}

export default Header;
