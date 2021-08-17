import React, { Link, Component, useEffect, useState } from 'react';
import axios from 'axios';
import './questions.css';
import car from '../images/car.png';
import Footer from './Footer';
import Logout from './Logout';




const  Question = () => {
        
        const [title, setTitle] = useState("Title")
        const [question, setQuestions] = useState("Question");

        

        
        axios.get(`/api/questions`)
                .then((response) => {
                    let arrayQuestions = response.data;
                    arrayQuestions.forEach((item) => {
                        setTitle(item.Title)      
                        setQuestions(item.Content)
                    });
                    
                }, [])
        


    return (
        <>  
            <Logout />
            <div class="question-container">
                <p id="question-title">{title}</p>

                <p id="question">{question}</p>
                <div class="question-child-image">
                    <img id='car' alt='car' src={car}/>
                </div>
                    <div id='question-buttons'>
                        <a href="/questions-page/test"><button id='ready-to-solve'>I'm ready to solve this problem!</button></a>
                        <a href="/questions-page/help"><button id='i-need-help'>I need more help</button></a>
                        
                    </div>
                    <Footer id='questions-footer' />
                    
            </div>

            
        
        </>
        
    )

}

export default Question;


