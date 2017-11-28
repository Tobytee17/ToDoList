const bodyParser = require('body-parser');

//Middleware for post/delete requests
const urlEncodedParser = bodyParser.urlencoded({extended: false});

//Router that is exported to the main app
module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('todoList');
    });
}