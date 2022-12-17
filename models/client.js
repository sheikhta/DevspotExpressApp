const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema({
    firstName: { 
        type: String,
        require: true,
    },
    lastName: { 
        type: String,
        require: true,
    },

    age: {
        type: Int,
        require: true
    },

    dob: {
        type: Date,
        require: true
    },
    
}, {
    collection: 'client'
});

module.exports = mongoose.model('client', usersSchema);