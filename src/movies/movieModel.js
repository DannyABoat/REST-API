const mongoose = require("mongoose");

//builds new schema template for data entry
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    actors: [{ type: String, },
    ],
    year: {
        type: Number
    },
    producer: {
        type: String
    },
});

//set schema to Movie variable
const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;