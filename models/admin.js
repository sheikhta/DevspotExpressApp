const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({
    firstName: { 
        type: String,
        require: true,
    },
    lastName: { 
        type: String,
        require: true,
    },
}, {
    collection: 'admins'
});

module.exports = mongoose.model('admins', adminSchema);