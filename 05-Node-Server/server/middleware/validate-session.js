const jwt = require('jsonwebtoken');
const User = require('../db').import('../models/user');

const validateSession = (req, res, next) => {
    const token = req.headers.authorization;
    //variable created to hold the token, which is pulled from the authorization header of the incoming request
    console.log('token --> ', token);
    if (!token) {
        return res.status(403).send({auth: falase, message: "No token provided"})
        //if no token is present, the 403 forbidden error is returned as the response
    } else {
        jwt.verify(token.process.env.JWT_SECRET, (err, decodeToken) => {
            //call upon the JWT package and invoke the verify method
            console.log('decodeToken --> ', decodeToken);
            if (!err && decodeToken){
                User.findOne({
                    where: {
                        id: decodeToken.id
                    }
                })
                .then(user => {
                    console.log('user --> ', user);
                    if (!user) throw err;
                    console.log('req --> ', req);
                    req.user = user;
                    console.log('next --> ', next);
                    return next();
                })
                .catch(err => next(err));
            } else {
                req.errors = err;
                return res.status(500).send('Not Authorized');
            }
        });
    }
};