const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Title of the joke is required"],
        minlength: [3, "Must be at least 3 characters long!"]
    }, 

    jokeText: {
        type: String,
        required: [true, "Please enter the joke!"],
        minlength: [3, "Joke text must be longer than 3 characters!"]
    },

    author: {
        type: String,
    }
}, {timestamps: true})

const Joke = mongoose.model("JokesDataBase", JokeSchema);

module.exports = Joke;