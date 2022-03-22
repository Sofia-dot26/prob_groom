'use strict'

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const response = require('../response')
const db = require('../settings/db')
const config = require('../config')
// const decodedToken = require('../middleware/decoded')
 const salt = bcrypt.genSaltSync(15)

exports.signup = (req,res) => {
    db.query("SELECT `id`,`login`,`role` from `employees` WHERE `login` = '"+ req.body.login +"'",(error,rows,fields) => {
        if(error) {
            response.status(400, error, res)
        } else if(typeof rows !== 'undefined' && rows.length > 0) {
            const row = JSON.parse(JSON.stringify(rows))
            row.map(rw => {
                response.status(302, {message: `Пользователь с таким login - ${rw.login} уже зарегeстрирован!`}, res)
                return true
            })
        }else{
            const login = req.body.login 
            const pass = bcrypt.hashSync(req.body.passw, salt)
            const name = req.body.name !=='' ? req.body.name : 'Не указано'

            const sql = "INSERT INTO `employees`(`login`, `passw`,`name`,`salt`) VALUES('"+ login+"','"+ pass+"','"+name+"','"+salt+"')";
            db.query(sql,(error,result) => {
                if(error){
                    response.status(400,error,res);
                }else {
                    //response.status(200,{message:`Регистрация прошла успешна`,result},res)
                    db.query("SELECT `id`, `role` from `employees` WHERE `login` = '"+login+"'",(error,rows,fields) =>{
                        if(error){
                            response.status(400,error,res)
                        }else{
                            const row = JSON.parse(JSON.stringify(rows))
                            row.map(rw =>{
                
                         
                                        const token = jwt.sign({
                                            userId: rw.id,
                                            login: login,
                                            role: rw.role
                                        }, config.jwt, { expiresIn: 120 * 120 })
                    
                                        response.status(200, {token: `Bearer ${token}`}, res)
                               
                             
                            })
                        }        
                    })
                }
            })

        }
    })
}

exports.signin = (req, res) => {
    console.log(req.body)
    db.query("SELECT `id`, `login`, `passw`,`role`,`salt` from `employees` WHERE `login` = '"+req.body.login+"'",(error,rows,fields) =>{
        if(error){
            response.status(400,{message:`Error`},res)
        }else if(rows.length <= 0){
            response.status(401,{message:`Пользователь с login - ${req.body.login} не найден, пройдите регистрацию`},res)
        } else{
            // db.query("SELECT `login`,`role` FROM `users` WHERE `login` = '"+req.body.login+"'")
            const row = JSON.parse(JSON.stringify(rows))
            row.map(rw =>{


                console.log(rw)
                const pass = bcrypt.hashSync(req.body.password,rw.salt)
                console.log(pass)
                console.log(rw.passw)
                if(pass.indexOf(rw.passw)===0){
                    //если тру генерируем токен
                        const token = jwt.sign({
                            userId: rw.id,
                            login: rw.login,
                            role: rw.role
                        }, config.jwt, { expiresIn: 120 * 120 })
    
                        response.status(200, {token: `Bearer ${token}`,role: rw.role}, res)
                }else{
                   //ошибка
                   response.status(401,{message:`Пароль не верный`},res) 
                   
                 }
                return true
            })
        }        
      }
    )}
    exports.addEx = (req,res) => {
   
        db.query("SELECT * from `booking` ",(error,req,res) => {
            if(error) {
                response.status(400,error,res);
            }else{
                const name = req.body.name
                const phone  = req.body.phone
                const service_id  = req.body.service_id
                
           
    
                const sql = "INSERT INTO `booking`(`name`, `phone`,`service_id`) VALUES('"+ name +"','"+ phone +"','"+service_id+"')";
                db.query(sql,(error,result) => {
                    if(error){
                        response.status(400,error,res);
                    }else {
    
                        response.status(200,{message:`Вы оформили заказ`,result},res)
                       
                                 
                                }
                            }   )     
                        }
    
                        
                    })
                }