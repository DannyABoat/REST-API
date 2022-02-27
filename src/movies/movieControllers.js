const Movie =  require("./movieModel");

// build functions to add a new entry to our db
// the function takes the request from the client (insomnia)
// and sends a response from the server (our app)
exports.addMovie = async (req, res) => {
    try{
        const newMovie = await Movie.create(req.body);
        res.status(200).send({movie: newMovie})
    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message});
    }
};


// build a function to update entries on the database
exports.updateMovie = (req, res) => {
    
         Movie.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            // runValidators: true,
            // context: 'query'
    })
    .then((movie) => res.send(movie))
    .catch(error => {
        console.log(error)
        res.status(500).send({message: error.message})
    })
    };


// build a function to delete entries from the database    
exports.deleteMovie = (req, res) => {
    Movie.findByIdAndDelete(req.params.id,)
    .then((movie) => {
        if (movie) {
            res.send({message: "Chosen movie deleted"})
        }
        return movie;
    })
    .catch(error => {
        console.log(error)
        res.status(500).send({message: error.message})
    })
};


// build function to list all of our db entries
// use the req when building more complicated get request
exports.listMovies = async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.status(200).send({movies});
    } catch (error) {
        console.log(error);
        res.status(500).send({error: error.message});
    }
};

// quick test function to see if our app is behaving as expected
// when hitting the "localhost: 5001/test" route
exports.testRoute = async (req, res) => {
    res.status(200).send({"test": "test route works"});
};