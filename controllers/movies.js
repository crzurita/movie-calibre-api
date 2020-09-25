var { getMoviesModel, getMovieByIdModel, insertRateModel } = require('../models/movies');

var getMovies = function (req, res) {
  getMoviesModel()
    .then(function (data) {
      res.send(data);
    })
    .catch(function (err) {
      res.send(err.code);
    })
}

var getMovieById = function (req, res) {
  var id = req.params.id;
  getMovieByIdModel(id)
    .then(function (data) {
      res.send(data[0]);
    })
    .catch(function (err) {
      res.send(err.code);
    })
}

var insertRate = function (req, res) {
  var rates = req.body;
  insertRateModel(rates)
    .then(function (data) {
      res.send(data);
    })
    .catch(function (err) {
      res.send(err.code);
    })

}

module.exports = {
  getMovies,
  getMovieById,
  insertRate
}