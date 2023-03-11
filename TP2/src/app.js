const express = require('express')
const { connectTodB } = require('./services/db/connection')
const app = express()
const port = 3000

connectTodB().then(() => {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
})