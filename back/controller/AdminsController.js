'use strict'
const jwt = require('jsonwebtoken')

const response = require('../response')
const db = require('../settings/db')
const config = require('../config')
// const decodedToken = require('../middleware/decoded')


exports.getAllUsers = (req,res) => {
    
    db.query("SELECT `id`,`login`,`role` FROM `employees` ",(error,rows,fields) => {
        if(error) {
            response.status(400,error,res)
        }else{

            response.status(200,rows,res)
        }
    })
}