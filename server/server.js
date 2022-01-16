const express = require ("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors({
    origin: "http://localhost:3000"
}))

require("./config/mongoose.config");
require("./routes/joke.routes")(app);


app.listen(8000, ()=> console.log("You are connected to port 8000!"))