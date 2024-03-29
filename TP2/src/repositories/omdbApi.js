const axios = require('axios');
const conf = require("../../conf.json")

const url = conf.tp2.omdbUrl
const apiKey = conf.tp2.omdbKey

const getMovieByTitle = async (req, res, next) => {
    try {
        const fullUrl = `${url}?t=${req.query.title}&apikey=${apiKey}`
        const response = await axios.get(fullUrl)
        const movie = {
            title: response.data.Title,
            genre: response.data.Genre.split(',')[0],
            language: response.data.Language.split(',')[0],
            duration: response.data.Runtime,
            imdbId: response.data.imdbID
        }
        req.query = movie
        return next()
    } catch (err) {
        return res.status(500).json(
            {
                error: err.message,
            }
        );
    }
}

module.exports = {
    getMovieByTitle
}