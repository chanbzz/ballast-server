import React, { Link, Component, useEffect, useState } from 'react';
import axios from 'axios';
import './dashboard.css';




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
        <p id="title">{title}</p>
        <p id="question">{question}</p>
        <div id="button">
        <button id='ready-to-solve'>I'm ready to solve this problem!</button>
        <a href="/questions-page/help"><button id='i-need-help'>I need more help</button></a>
        </div>
        </>
        
    )

}

export default Question;


