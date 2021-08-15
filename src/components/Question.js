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
        <p>{question}</p>
        <button id='ready-to-solve'>I'm ready to solve this problem!</button>
        <button id='i-need-help'>I need more help</button>
        </>
        
    )

}

export default Question;


