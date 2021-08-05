let express = require('express');
let app = express();
let testController = require('./controllers/testcontroller'); //linking file
let calcController = require('./controllers/calculatorcontroller')

app.use(express.json());
app.use('/test', testController);

app.use('/calculator', calcController);
app.listen(3000, function () { //creating a listening port, callback function
    console.log('app is listening on port 3000');
});

