var query = require('../modules/database');

var getMoviesModel = function () {
  if (query) {
    return new Promise(function (resolve, reject) {
      //query('SELECT * FROM movies ORDER BY title DESC')
      query('SELECT m.id, m.title, m.image, m.year, m.rated, m.released_on, genre, director, plot, ROUND(AVG(r.rate)) as user_rating FROM movies m LEFT JOIN rates r ON m.id=r.id_movie GROUP BY m.id ORDER BY title DESC')
        .then(function (res) {
          resolve(res);
        })
        .catch(function (err) {
          reject(err);
        })
    })
  }
}

var getMovieByIdModel = function(id) {
  if(query) {
    return new Promise(function (resolve, reject) {
      query('SELECT * FROM movies WHERE id = ?', id)
        .then(function (res) {
          resolve(res);
        })
        .catch(function (err) {
          reject(err);
        })
    })
  }
}

var insertRateModel = function(rate) {
  if(query) {
    return new Promise(function (resolve, reject) {
      query('INSERT INTO rates SET id_movie = ?, rate = ?, comment = ?', [rate.movieId, rate.rate, rate.comment])
        .then(function (res) {
          resolve(res);
        })
        .catch(function (err) {
          reject(err);
        })
    })
  }
}

module.exports = {
  getMoviesModel,
  getMovieByIdModel,
  insertRateModel
}