import React from 'react';
import hmm from '../images/hmm.png';
import './questionHelp.css';
import Header from './Header';
import Footer from './Footer';

const QuestionHelp = () => {
    return (
        <div>
            <header id='top-banner'>
                <h1>Ballast. </h1>
            </header>
            <img id='hmm' alt="thinking-picture" src={hmm}></img>

            <div id="help-buttons">

            <a id='definition' href="https://simple.wikipedia.org/wiki/Palindrome" target="_blank">
                <button>What's a palindrome?
                </button>
            </a>
            
                
            
            <a href="https://www.w3schools.com/python/python_strings.asp" target="_blank">
                <button id="whats-a-string">What's a string?
                </button>
            </a>
                
            
                <a href="https://afteracademy.com/blog/what-is-the-two-pointer-technique" target="_blank"><button id="two-pointer-method">Whats the two pointer method?
            </button></a>
            <div id="button-row-up"> 
                <a href="/questions-page/help/videos"><button>
                    Watch some vidz
                </button></a>
                <button>
                    Step through some code!
                </button>
                <a href="/questions-page/test"><button>
                    I think I'm ready now!
                </button></a>
                <button>
                    I still need help!
                </button>
            </div>  
            </div>
            <a id='logout' href="/api/logout">Logout</a>
        </div>
    )
}

export default QuestionHelp;
