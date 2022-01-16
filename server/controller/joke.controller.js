const Joke = require('../model/joke.model');
const Game = require('../model/joke.model');

module.exports = {
    findAllJokes: (req, res) => {
        Joke.find()
            .then((allJokes) => {
                console.log(allJokes);
                res.json(allJokes);
            })
            .catch((err) => {
            console.log(" Find all jokes failed!");
            res.json({message:"Something went wrong in findAll", error: err })
            })
    },

    createNewJoke: (req, res) =>{
        Joke.create(req.body)
            .then((newJoke)=> {
                console.log(newJoke);
                res.json(newJoke);
            })
            .catch((err)=> {
                console.log("Something went wrong in createNewJoke");
                res.status(400).json(err);
            })
     },
    findOneJoke: (req, res) =>{
        Joke.findOne({_id: req.params.id}) //id must be same as in router
            .then((oneJoke) =>{
                console.log(oneJoke);
                res.json(oneJoke);
            })
            .catch((err)=> {
                console.log(" Find one joke failed!");
                res.json({message:"Something went wrong in findOne", error: err })
             })
        },
    deleteJoke: (req, res) =>{
        Joke.deleteOne({_id: req.params.id}) //id must be same as in router
            .then((oneJoke) =>{
                console.log(oneJoke);
                res.json(oneJoke);
            })
            .catch((err)=> {
                console.log(" Delete joke failed!");
                res.json({message:"Something went wrong in deleteOne", error: err })
            })
        },
    updateJoke: (req, res) =>{
        Joke.findOneAndUpdate({_id: req.params.id}, //id must be same as in router
            req.body,
            {new: true, runValidators: true}
        )
            .then((updatedJoke) =>{
                console.log(updatedJoke);
                res.json(updatedJoke);
            })
            .catch((err)=> {
                console.log(" Update game failed!");
                res.status(400).json(err);
            })
        }
}