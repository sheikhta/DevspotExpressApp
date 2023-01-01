const mongoose = require('mongoose');
const clientSchema = new mongoose.Schema({
    firstName: { 
        type: String,
        require: true,
    },
    lastName: { 
        type: String,
        require: true,
    },

    age: {
        type: Number,
        require: true
    },

    dob: {
        type: Date,
        require: true
    },
    
}, {
    collection: 'clients'
});

module.exports = mongoose.model('clients', clientSchema);