const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    text: String,
    done: {
        type: Boolean,
        default: false
    }
})

module.exports = Todo = mongoose.model('todos', todoSchema);