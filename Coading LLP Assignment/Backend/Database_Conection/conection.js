const mongoose = require("mongoose");

//import Dotenv
require("dotenv/config");


mongoose.connect(process.env.DB_CONECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Mongodb conection is successful");
}).catch(()=>{
    console.log("No Connection is established!!");
});