const express = require('express')

const app = express()
const port = 3000
const requests_count = {}

app.use((req, res, next) => {
    const route = req.url
    route in requests_count ? requests_count[route]++ : requests_count[route] = 1
    console.log("[" + new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + "]: " + req.url)
    next()
})

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.get("/welcome", (req, res) => {
    res.send("Bienvenue sur le TP 1 du cours d'architecture logicielle")
})

app.get("/secret", (req, res) => {
    res.status(401).send("Vous ne possédez pas les droits pour accéder à ma page secrète")
})

app.get("/error", (req, res) => {
    res.status(500).send({
        error: "Une erreur s'est produite"
    })
})

app.get("/img", (req, res) => {
    res.download(__dirname + "/img.png")
})

app.get("/redirectMe", (req, res) => {
    res.redirect("https://www.iut-littoral.fr/")
})

app.get("/users/:name", (req, res) => {
    res.send("Bienvenue sur la page de " + req.params.name)
})

app.get("/somme", (req, res) => {
    res.send("La somme de " + req.query.a + " et " + req.query.b + " est égale à " + (parseInt(req.query.a) + parseInt(req.query.b)))
})

app.get("/metrics", (req, res) => {
    res.send({
        status: "healthy",
        requestsCount: requests_count,
        uptime: process.uptime()
    })
})

app.use((req, res, next) => {
    res.status(404).send("Cette page n'existe pas !")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})