//Dependencies

var express = require('express');
var router = express.Router();

//Models

var User = require('../models/user');

//Routes
User.methods(['get', 'put', 'post', 'delete']);
User.register(router, '/users');

/*
//Routes
router.get('/products', function(req, res){
    res.send('API Working...');
});
*/

//Return router
module.exports = router;
