const mongoose = require("mongoose");
// const { isEmail } = require("validate")
const agentSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        require: true,
        unique: true,
        // validate: [isEmail, "Sorry, Incorrect email format"]
    },

    password: {
        type: String,
        require: true
    },
})

const Agent = mongoose.model("Agent", agentSchema);

module.exports = Agent