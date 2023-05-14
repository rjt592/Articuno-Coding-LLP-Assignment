const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");


// conection Port
const port = process.env.PORT || 4000

// import bodyParser and cors
app.use(bodyParser.json());
app.use(cors());

//Import Database conection file
require("./Database_Conection/conection.js");

app.get("/", async (req, res) =>{
    res.send("App is running");
});


// Import Signup router
const signupRouter = require("./Routes/Signup.js")
app.use("/user", signupRouter);

//Import New Post Router
const newPost = require("./Routes/Newpost.js");
app.use("/newpost", newPost);

// Listening Port
app.listen(port, () =>{
    console.log(`Server is up and Running on ${port}`)
});