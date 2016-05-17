import * as express from "express";
import * as errorHandler from "errorhandler";
import * as methodOverride from "method-override";
var bodyParser = require('body-parser');
import * as mongoose from 'mongoose';
import * as routes from "./server-src/routes/index";
import * as api from "./server-src/routes/api";

var app = express();

// Configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(__dirname + '/frontend'));

var env = process.env.NODE_ENV || 'development';
if (env === 'development') {
    app.use(errorHandler());
}

var dbName = 'userDB';
mongoose.connect('mongodb://localhost/' + dbName);

// Routes
api.initRoutes(app);
app.get('/', routes.index);
app.get('/*', (req, res) => {
    res.redirect('/');
});

app.listen(3000, function(){
    console.log("Demo Express server listening on port %d in %s mode", 3000, app.settings.env);
});

export var App = app;