const express = require('express');
let sequelize = require('../db')
let user = sequelize.import('../models/user.js')

const { use } = require('./journalcontroller');

const router = require('express').Router(); 
// ^ import the Express framework and access the Router() method, assigning it to a variable called router
const User = require('../db').import('../models/user');
// ^ import the user model through our db.js and store it in User variable. 
//   It is convention to use Pascal casing (uppercase on both words) for a model class with Sequelize.
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

/* *********************
****** USER SIGNUP *****
********************** */
router.post('/create', function (req, res) { 
    //get access to the Router() object methods
    User.create({
        /*.create() is a sequelize method that allows us to create an instance of the User model and 
           send it off to the database, as long as the data types match the model*/
        //email: "test@email.com",
        email: req.body.user.email,
        //req.body middleware provided by Express and append two properties or key-value pairs to it
        //password: "password1234",
        //password: req.body.user.password
        password: bcrypt.hashSync(req.body.user.password, 13)
        /* we call upon our bcrypt variable, which is referring the the bcryptjs dependency we 
           installed earlier
           bcrypt has a function called hashSync()
           hashSync() function accepts 2 arguments:
           - first argument is a string. this string is the value we want hashed. in our code, we  
             supple the original password(req.body.user.password)
           - second argument is a string or number. this argument is the number of times we want our 
             first argument salted. this argument defaults to 10. in our case, we tell the function 
             to salt our password 13x
           encryption related words:
           - hashing: hashing an algorithm that perfoms a one-way calculation
           - salting: salting is adding of random data to a hashed string.
        */
    })
        .then( // call the .then() method
            //returns a promise
            //res.send("This is our user/create endpoint!")
            /* print the success message ("This is our user/create endpoint") to the console once the 
               create() is done running*/
            function createSuccess(user) {
                let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 });
                //create variable called token
                //call upon jwt variable, which is referring to the jsonwebtoken
                //.sign() is the method to create the token and takes at least 2 parameters: the payload 
                //and the signature; you can also supply some specific options or a callback
                res.status(200).json({
                    user: user, //creating a user object in our response and settings its value to the user parameter
                    //object: parameter
                    message: "User successfully created!",
                    sessionToken: token
                    /* expanding our response a bit more. first, we add a message letting us know that we were able to 
                       successfully create a user. then, we add a key of sessionToken and pass it the value of the token. 
                    */
                });
                /* instead of res.send we envoke .json() method. This will, of course, package our response as json.
                   .send() and .json() are identical, however, .json() will convert non-objects (such as null and 
                   undefined) into valid JSON while .send() cannot */
            }
    )
        .catch(err => res.status(500).json({error:err}))
        // use the .catch() method to capture the error if our promise gets rejected
        // sends a 500 error with JSON-ified message
});

/* *******************
***** USER SIGNIN ****
******************* */
router.post('/login', function (req, res) {
    //Use the Express router object and call the post() method
    /* choose to go with a post() method because we log in, we are still sending data to the database
       .post() method accepts 2 arguments: the first argument '/login' is the path
       the 2nd argument is the callback function that allows us access to the request and/or the response 
    */
    User.findOne({
        /* findOne() method is a Sequelize method that does exactly what it says: it tries to find 
           something within the database that we tell it to look for. This is called Data Retrieval
        */
        where: {
            /* where is an object within Sequelize that tells the database to look for something 
               matching its properties 
            */
            email: req.body.user.email
        }
    })
        .then(function loginSuccess(user) {
            if (user) {
                bcrypt.compare(req.body.user.password, user.password, function (err, matches){
                    if (matches) {
                        let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24})
                        res.status(200).json({
                            //if successful add an object, in this case user, in our response
                            user: user,
                            message: 'User successfully logged in',
                            sessionToken: token
                        })
                    } else {
                        res.status(502).send({error: 'login failed'});
                    }
                });
            } else {
                res.status(500).json({error: 'User does not exist.'})
            }
        })
    .catch(err => res.status(500).json({error:err}))
});

module.exports = router;