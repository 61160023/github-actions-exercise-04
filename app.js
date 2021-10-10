const express = require('express')
const port = process.env.port || 8080
const app = express()
const host = '0.0.0.0';

app.get('/', (req, res) => {
    res.json({message: 'Hello world!'})
})

app.listen(port,host, () => {
    console.log('The app is up and running!')
})
module.exports = app