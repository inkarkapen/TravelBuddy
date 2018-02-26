var mongoose = require('mongoose')
var UserSchema = new mongoose.Schema({
    name: String
})
mongoose.model('User', UserSchema)

var CitySchema = new mongoose.Schema({
    name: String
})
mongoose.model('City', CitySchema)