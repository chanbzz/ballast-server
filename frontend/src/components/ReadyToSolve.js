import React from 'react';
import './ready.css';

const ReadyToSolve = () => {
    return (
        <div>
            <h1 id='ready-questions'>Questions</h1>
            <h2 id="ready-title">Is Palindrome</h2> 

            <p id="ready-play">Play with some code!</p>
            

            <iframe src="https://trinket.io/embed/python/b5f458a1af" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
            
            <div id="ready-button">
            <a href="/dashboard"><button>Back to Dashboard</button></a>
            <a href="/api/logout"><button>Logout</button></a>
            </div>

        
            <link rel="stylesheet" type="text/css" href="/" media="print" />
            <script src="" async defer></script>
        </div>
    )
}

export default ReadyToSolve;
