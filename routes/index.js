var express = require("express");
var router = express.Router();

const request = require("request");

const apiKey = "79191836ddaa0da3df76a5ffef6f07ad6ab0c641";

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("WELCOME!!!");
});

router.get("/movies", function(req, res, next) {
  request(
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=fr-UFR&sort_by=popularity.desc&include_adult=false&include_video=false`,
    function(error, response, body) {
      body = JSON.parse(body);
      res.json({ result: true, movies: body.results });
    }
  );
});

router.get("/mymovies", function(req, res, next) {
  movieModel.find(function(error, data) {
    res.json({ result: true, data });
  });
});

router.post("/mymovies", function(req, res, next) {
  const newMovie = new movieModel({
    title: req.body.title,
    overview: req.body.overview,
    poster_path: req.body.poster_path,
    idMovieDB: req.body.idMovieDB
  });
  newMovie.save(function(error, movie) {
    res.json({ result: true, movie });
  });
});

router.delete("/mymovies", function(req, res, next) {
  res.json({ result: true });
});

module.exports = router;
