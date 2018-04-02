const mongoose = require('mongoose')

minionSchema = new mongoose.Schema({
    name: String,
    imageURL: {type: String, default: "https://goo.gl/u6GHrh"}
}) 

const Minion = mongoose.model('Minion', minionSchema)

module.exports = Minion