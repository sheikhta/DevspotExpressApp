const { promiseImpl } = require('ejs');
const {
    usersController,
    adminsController,
    clientsController
} = require('../controllers');

const signup = async (body) => {
    //apply validation
    if(!body.userName) {
        return Promise.reject ({ error: "userName is required"});
    }
    if(!body.password) { 
        return Promise.reject ({ error: "password is required"});
    }
    if(!body.userType) {
        return Promise.reject ({ error: "userType is required"});
    }
    if(!body.data) { //data represents public info of the user
        return Promise.reject ({ error: "data is required"});
    }
    
    try {
        let result = null;
        const userType = body.userType;
        switch (userType) {
            case 'admin':
                if(!body.data.firstName){
                    return Promise.reject({error: "first Name is required"})
                } 
                if(!body.data.lastName) { //data represents public info of the user
                    return Promise.reject ({ error: "last name is required"});
                }
                //apply admin fields validation here
                result = await adminsController.addAdmin(body.data);
                break;
            case 'client':
                if(!body.data.firstName){
                    return Promise.reject({error: "first Name is required"})
                } if(!body.data.lastName) { //data represents public info of the user
                    return Promise.reject ({ error: "last name is required"});
                } if(!body.data.age){
                    return Promise.reject({error: "Age is required"})
                } if(!body.data.dob) { //data represents public info of the user
                    return Promise.reject ({ error: "last name is required"});
                }
                //apply client fields validation here
                result = await clientsController.addClient(body.data);
                break;
            default:
                return Promise.reject ({ error: "userType is invalid"});
        }

        const userJson = {
            userName: body.userName,
            password: body.password, //make this password encrypted
            userType: {
                kind: userType,
                item: result._id
            }
        };
        const user = await usersController.addUser(userJson);
        //if you generate automatic email for email and password for users code write here
        return user;
    } catch (ex) {
        return Promise.reject ({ error: ex });
    }
};

module.exports = {
    signup
}