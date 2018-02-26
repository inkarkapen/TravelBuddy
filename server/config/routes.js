var controller = require('./../controllers/controller')
var path = require('path')
module.exports = function(app){
    app.post('/login', function(req, res){
        //console.log('routes work!')
        controller.login(req,res)
    })
    app.get('/logout', function(req,res){
        controller.logout(req,res)
    })
    app.get('/checkSession', function(req,res){
        //console.log('in checkSession routes')
        controller.checkSession(req,res)
    })
    app.get('/getAllCities', function(req,res){
        controller.getAllCities(req, res)
    })
    app.post('/addCity', function(req, res){
        //console.log(req.body)
        controller.addCity(req,res)
    })
    app.post('/delete', function(req, res){
        //console.log('in delete routes', req.body.id)
        controller.delete(req, res)
    })
    app.all('*', (req,res,next)=>{
        res.sendFile(path.resolve('./client/dist/index.html'))
    })
}