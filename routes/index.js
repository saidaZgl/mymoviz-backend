// YET THERE IS NO CONNECION BETWEEN THE FRONT END REACT APP AND THIS EXPRESS BACK END.
// THEREFORE, WE NEED TO USE POSTMAN TO SIMULATE FUTURE CRUD OPERATIONS WHICH WE WILL EXECUTE LATER FROM THE FRONT END.

const express = require("express");
const router = express.Router();

const movieModel = require("../models/movies");

// We then need to require our module request
const request = require("request");

// Then we can store our key in order to re-use them more easily
const apiKey = "193e5ac3ca529c846d4445cbd0230cb0";

/* GET home. */
router.get("/", function(req, res, next) {
  res.send("Welcome to our myMoviz backend!");
});

/* GET home. */
router.get("/", function(req, res, next) {
  res.send("Welcome to our myMoviz backend!");
});

/* GET movies. */
router.get("/movies", function(req, res, next) {
  request(
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=fr&page=1&sort_by=popularity.desc&include_adult=false&include_video=false`,
    function(error, response, body) {
      body = JSON.parse(body);
      res.json({ result: true, movies: body.results });
    }
  );
});

/* GET mymovies. */
router.get("/mymovies", function(req, res, next) {
  // Here, we want to find every movies that we have in our collection movies on mlab
  movieModel.find(function(error, data) {
    res.json({ result: true, data });
  });
});

/* POST mymovies. */
router.post("/mymovies", function(req, res, next) {
  console.log("route ok");
  console.log(req.body);
  // Now, we want to save a new movie.
  var newMovie = new movieModel({
    title: req.body.title,
    overview: req.body.overview,
    poster_path: req.body.poster_path,
    idMovieDB: req.body.idMovieDB
  });
  newMovie.save(function(error, movie) {
    res.json({ result: true, movie });
  });
});

/* DELETE mymovies. */
router.delete("/mymovies/:movieId", function(req, res, next) {
  // Here we want to use params in order to delete one specific element in our data base
  movieModel.deleteOne({ idMovieDB: req.params.movieId }, function(
    error,
    response
  ) {
    res.json({ result: true });
  });
});

module.exports = router;
