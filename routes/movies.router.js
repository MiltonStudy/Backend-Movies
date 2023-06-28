const express = require('express');
const MoviesService = require('../services/movies.service')
const router = express.Router();

const moviesService = new MoviesService();

router.get('/', async (req, res) => {
    const movies = await moviesService.find();
    console.log(movies);
    res.json(movies);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const movie = await moviesService.findOne(id);
    res.json(movie);
});

router.post('/', async (req, res) => {
    const movie = {
        "movie": req.body.movie,
        "description": req.body.description,
        "director": req.body.director,
        "urlImagen": req.body.urlImagen,
        "yearOfPublication": req.body.yearOfPublication
    };

    const newMovie = await moviesService.create(movie);
    res.json(newMovie);
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const movie = {
        "id": parseInt(id),
        "movie": req.body.movie,
        "description": req.body.description,
        "director": req.body.director,
        "urlImagen": req.body.urlImagen,
        "yearOfPublication": req.body.yearOfPublication
    }

    const updateMovie = await moviesService.update(movie);
    res.json(updateMovie);
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deleteMovie = await moviesService.delete(id);
    res.json(deleteMovie);
});

module.exports = router;