require('dotenv').config();
let express = require("express");
let app = express();
let sequelize = require("./db");

let user = require("./controllers/user-controller");
let animal = require('./controllers/animal-controller');

sequelize.sync();
//sequalize.sync({force:true});

app.use(express.json());
app.use(require("./middleware/headers"));

//Exposed
app.use("/user", user);

//Protected
//app.use(require('./middleware/validate-session'));
app.use('/animal', animal);

app.listen(3001, function () {
  console.log("App is listening on port 3001");
});
