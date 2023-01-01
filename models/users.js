const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema({
    userName: { 
        type: String,
        require: true,
        unique: true
    },
    password: { 
        type: String
    },
    userType: { 
        kind: {
            type: String, enum: ['admin', 'client']
        },
        item: {
            type: mongoose.Types.ObjectId, ref: 'userType.kind'
        }
    }
}, {
    collection: 'users'
});

module.exports = mongoose.model('users', usersSchema);