const express = require('express');
const router = express.Router();
const moviesController = require('../Controller/moviesController')

//router parameter
router.param('id',moviesController.checkId)

//routing
router.route('/')
    .get(moviesController.getAllMovies)
    .post(moviesController.validateBody,moviesController.postMovie);
router.route("/:id")
    .get(moviesController.getMovie)
    .patch(moviesController.patchMovie)
    .delete(moviesController.deleteMovie)

module.exports= router;