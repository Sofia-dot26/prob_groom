'use strict'

module.exports = (app) => {
    const adminsController = require('../controller/AdminsController')
    const usersController = require('../controller/UsersController')
    const passport = require('passport')

    app
        .route('/admin')
        .get(passport.authenticate('jwt',{session:false}),adminsController.getAllUsers)
    
    app
        .route('/auth/signup')
        .post(usersController.signup)

    app 
        .route('/auth/signin')
        .post(usersController.signin)
app
.route('/auth/AddEx')
.post(usersController.addEx)  
    
}