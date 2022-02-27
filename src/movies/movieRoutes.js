// Router is built into express
// refers to how an application's endpoint (URIs) respond to client request
const { Router } = require("express");
const { addMovie, listMovies, testRoute, updateMovie, deleteMovie } = require("./movieControllers");
const movieRouter = Router();

// set endpoints with various HTTP verbs
movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", listMovies);
movieRouter.get("/test", testRoute);
movieRouter.patch("/movie/:id", updateMovie);
movieRouter.delete("/movie/:id", deleteMovie);

module.exports = movieRouter;