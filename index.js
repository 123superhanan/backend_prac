require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/instagram", (req, res) => {
    res.send("_thehanism_")
})

app.get("/login", (req, res) => {
    res.send('<h1>login page</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Hanan's server app listening on port ${port}`)
})