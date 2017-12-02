const express = require('express');
const todoController = require('./controllers/todolist')

//create the express app
const app = express();

//Set the view engine
app.set('view engine', 'ejs');

//Allow for static files (CSS/JS) to be used in the views
app.use(express.static('./'));

//Pass the app the the controller
todoController(app);

//Specify the post to listen to
app.listen('3000');
console.log('Listening on port 3000');