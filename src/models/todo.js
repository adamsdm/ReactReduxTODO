const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema and model

const todoSchema = new Schema({
	title: String,
	description: String
});

const Todo = mongoose.model("todo", todoSchema);

module.exports = Todo;