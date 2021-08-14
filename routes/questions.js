const express = require("express")
const Questions = require("../models/Question")
const question_routes = express.Router()


//****************************************************************************************************************************route handler logic************* */

question_routes.get("/questions", async(req,res)=>{
    const questions = await Questions.find()
    console.log(questions)
    res.send(questions)
})

// HOW TO GET SPECIFIC QUESTIONS (not exact code... a theoretical example)
// question_routes.get("/questions/:id", async(req,res)=>{
//     const questions = await Questions.findById()
//     console.log(questions)
//     res.send(questions)
// })

module.exports = question_routes

