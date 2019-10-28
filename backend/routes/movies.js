const router = require('express').Router();
let Movie = require('../models/movie');

// Get oll movies in descending order with X limit
router.route('/').get((req, res) => {
  Movie.find()
    .sort({ createdAt: 'desc' })
    .then(req => res.json(req))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Get oll movies in descending order with X limit
router.route('/:id').get((req, res) => {
  Movie.findById(req.params.id)
    .then(req => res.json(req))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add new post 
router.route('/add').post((req, res) => {
  const title = req.body.title;
  const year = req.body.year;
  const description = req.body.description;
  const link = req.body.link;
  const genres = req.body.genres;
  const thumbnail = req.body.thumbnail;
  const poster = req.body.poster;
  const newMovie = new Movie({ title, year, description, link, genres, thumbnail, poster });

  newMovie.save()
    .then(() => res.json('Movie added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;