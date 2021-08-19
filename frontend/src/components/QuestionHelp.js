import React from 'react';
import hmm from '../images/hmm.png';
import './questionHelp.css';
import Header from './Header';
import Footer from './Footer';
import Logout from './Logout';

const QuestionHelp = () => {
    return (
        <div>
            <header id='top-banner'>
                <h1>Ballast. </h1>
            </header>
            <Logout />
            <img id="center-picture" alt="thinking-picture" src={hmm}></img>
            <section id='grid'>

                <a href="/questions-page/help/videos"><button class ='box'>
                        Watch some vidz
                    </button></a>
                

                <a href="https://simple.wikipedia.org/wiki/Palindrome" target="_blank">
                    <button class="box">What's a palindrome?
                    </button>
                </a>
                
                <a href="https://www.w3schools.com/python/python_strings.asp" target="_blank">
                    <button class="box">What's a string?
                    </button>
                </a>
                    
                
                    <a href="https://afteracademy.com/blog/what-is-the-two-pointer-technique" target="_blank"><button class="box">Whats the two pointer method?
                </button></a >
                    <a href="https://is-palindrome-visualization.herokuapp.com/" target="_blank"><button class="box">
                        Step through some code!
                    </button></a>
                    <a href="/questions-page/test"><button class="box">
                        I think I'm ready now!
                    </button></a>
            </section>
            
        </div>
    )
}
///

export default QuestionHelp;
