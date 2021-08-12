import React, { Link, Component, useEffect, useState } from 'react';
import axios from 'axios';
import './dashboard.css';



const  Question = () => {
        
    
        const [questions, setQuestions] = useState([]);

        

        useEffect(()=> {
            axios.get(`http://localhost:9000/api/questions`)
                .then((response) => {
                console.log(response)

                })
            })
        


    return (
        <h1>Hi</h1>
    )

}

export default Question;


