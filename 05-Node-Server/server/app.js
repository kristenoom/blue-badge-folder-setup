//require('dotenv').config();
let express = require('express');
let app = express();
let sequelize = require('./db');

let journal = require('./controllers/journalcontroller');   //('./foldername/filename')
let user = require('./controllers/usercontroller'); //('./foldername/filename')
// ^ import the usercontroller.js and assign it to a variable called user

app.use('/test', function (req, res) {
    res.send('This is a message from the test endpoint on the server!');
});

sequelize.sync();
//sequelize.sync({force: true});
app.use(require('./middleware/headers'));

app.use(express.json());
//in order to use req.body middleware, we need to use a middleware function called express.json()
//this app.use statement MUST go above any routes. Any routes above this statement will not be able to use the express.json() function, causing them to break
//IMPORTANT: tells the application that we want JSON to be used as we process this request


/* ***********************
*** EXPOSED ROUTE ********
*********************** */
//localhost:3000/user/create
app.use('/user', user);
// call upon the use() method from the Express framwork and create a route to 
// access any future functions in our usercontroller.js
// The string '/user' is setting up the endpoint our URL will need to include to 
// access a controller. The user variable is the same variable we created above 
// and specifies which controller this endpoint is connected to.

/* **********************
**** PROTECTED ROUTE ****
********************** */
app.use(require('./middleware/validate-session'));
//everything below VALIDATE-SESSION is protected

//Have endpoint of journal / practice
//send a response from that endpoint (this is a practice route)
//app.use('/journal', require('./controllers/journalcontroller'));
//localhost:3000/journal
app.use('/journal', journal);

app.listen(3001, function () { //creating a listening port, callback function
    console.log('app is listening on port 3001');
});

