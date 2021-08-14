const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionsListSchema = new Schema({
    title: String,
    content: String,

});

const Question = mongoose.model('Questions', questionsListSchema);

module.exports = Question;
