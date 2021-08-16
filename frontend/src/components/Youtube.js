import React, { useState } from 'react';

import axios from 'axios';


// const API_KEY = 'AIzaSyAx5eJh8ysCzL0hJ9MW6Swt-dIU6UYEH9U';

// CONST NEW_KEY = 'AIzaSyCYmgrnMu9OD3WscAJBcJ09rwekkFhyaDg'

// const CHANNEL = 'PLAseks2pbTKYh94GdV3i4WWL37x8B-iSo';

const RESULT = 50;


const isPalindromeVids = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyCYmgrnMu9OD3WscAJBcJ09rwekkFhyaDg&list=PLAseks2pbTKYh94GdV3i4WWL37x8B-iSo&part=snippet,id&order=date&maxResults=3`


const Youtube = () => {

    const [vids, setVids] = useState('some vids')

    axios.get(isPalindromeVids)
        .then ((response) => {
            console.log(response)
        });

    return (
        <div>
            
        </div>
    )
}

export default Youtube;
