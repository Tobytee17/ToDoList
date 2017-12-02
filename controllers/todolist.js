const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Middleware for post/delete requests
const urlEncodedParser = bodyParser.urlencoded({extended: false});

//DB Connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE, {useMongoClient: true});

//Schema creation for the DB
const todoListSchema = new mongoose.Schema({
    task: String
})

//Model creation for the DB
const model = mongoose.model('todo', todoListSchema);

//Router that is exported to the main app
module.exports = function(app) {
    app.get('/', function(req, res) {
        model.find({}, function(err, data) {
            if(err) throw err;
            res.render('todoList', {todos: data});
        });
    });

    app.post('/', urlEncodedParser, function(req, res) {
        //Takes the posted data and forwards it to MongoDB
        let newToDo = model(req.body).save(function(err, data) {
            //Logs the error if one is to occur
            if(err) throw err;
            res.json(data);
        });
    });
};

