const mongoose = require("mongoose");

const dbName = "jokesDataBase";

mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log(`You connected to the ${dbName} database!`)
    })
    .catch((err) => {
        console.log(`There was an connection issue to ${dbName} database. Error: `, err)
    })