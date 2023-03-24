const express = require('express')
const { connectTodB } = require('./services/db/connection')
const router = require('./routes/index')

const app = express()
const port = 3000

app.use(router)

connectTodB().then(() => {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
})