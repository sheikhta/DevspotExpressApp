const {
    usersModel
} = require('../models');

const addUser = (body) => {
    const doc = new usersModel(body);
    const query = { _id: doc._id};
    return usersModel.findOneAndUpdate(query, doc,{
        upsert: true,
        new: true
    });
};

const updateUsers = (body) => {
    const query = { _id: body._id};
    return usersModel.findOneAndUpdate(query, body,{
        new: true
    });
};

const getAllUsers = (filter) => {
    return usersModel.findById(filter)

};

const getUser =(filter)=>{
    return usersModel.findOne(filter);
};

const deleteUser = (query) => {
    return usersModel.deleteOne(query)
};


module.exports = {
     addUser,
     getAllUsers,
     updateUsers,
     getUser,
     deleteUser
}