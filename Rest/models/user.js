//Dependencies

var restful = require('node-restful');
var mongoose = restful.mongoose;

//Schema
var userSchema = new mongoose.Schema({
    name : String,
    age: Number,
    email: {
        type: String,
        trim: true,
        unique: true
    }
});

// Return model
module.exports = restful.model('Users', userSchema);
