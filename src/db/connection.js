require("dotenv").config();
const mongoose = require('mongoose');

const connections = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("successfully connected");
    } catch (error) {
        console.log(error);
    }
};

connections();