var express = require('express');
var { getMovies, getMovieById, insertRate } = require('../controllers/movies');

var router = express.Router();

router.get('/', function (req, res) {
  res.send({
    movies: [
      {
        route: '/movies',
        action: 'Brings all the movies'
      },
      {
        route: '/movies/id',
        action: 'Brings the movie by id'
      }
    ]
  })
})

router.get('/movies', getMovies);
router.get('/movies/:id', getMovieById);
router.post('/rates', insertRate);

module.exports = router;