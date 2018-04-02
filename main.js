const
    express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    axios = require('axios'),
    httpClient = axios.create(),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    Minion = require('./Minion.js'),
    // minionsRouter = new express.Router(),
    PORT = 3000

app.use(logger('dev'))
app.use(bodyParser.json())
// app.use('/api/minions', minionsRouter)

mongoose.connect('mongodb://localhost/minions', (err) => {
    console.log(err || "Connected to Mongod")
})

app.get('/minions', (req, res) => {
    Minion.find({}, (err, allMinions) => {
        if(err) return console.log(err)
        res.json(allMinions)
    })
})

app.post('/minions', (req, res) => {
    Minion.create({}, (err, newMinion) => {
        if(err) return console.log(err)
        res.json({success: true, message: 'New minion created.'})
    })
})



app.listen(PORT, (err) => {
    console.log(err || `Andre ${PORT}`)
})