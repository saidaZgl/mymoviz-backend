const mongoose = require("mongoose");

const movieShema = mongoose.Schema({
  title: String,
  overview: String,
  poster_path: String,
  idMovieDB: Number
});

const movieModel = mongoose.model("movies", movieShema);

module.exports = movieModel;
