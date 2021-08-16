import React from 'react';
import hmm from '../images/hmm.png';
import './questionHelp.css';
import Header from './Header'







const QuestionHelp = () => {
    return (
        <div>
            <Header />
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
                
            
                <a href="https://afteracademy.com/blog/what-is-the-two-pointer-technique"><button id="two-pointer-method">Whats the two pointer method?
            </button></a>
            <div id="button-row-up"> 
                <button>
                    Watch some vidz
                </button>
                <button>
                    Step through some code!
                </button>
                <button>
                    I think I'm ready now!
                </button>
                <button>
                    I still need help!
                </button>
            </div>  
            </div>
        </div>
    )
}

export default QuestionHelp;
