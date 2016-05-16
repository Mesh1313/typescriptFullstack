"use strict";
var express = require("express");
var errorHandler = require("errorhandler");
var methodOverride = require("method-override");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require("./server-src/routes/index");
var api = require("./server-src/routes/api");
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
api.init(app);
app.get('/', routes.index);
app.listen(3000, function () {
    console.log("Demo Express server listening on port %d in %s mode", 3000, app.settings.env);
});
exports.App = app;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBWSxPQUFPLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFDbkMsSUFBWSxZQUFZLFdBQU0sY0FBYyxDQUFDLENBQUE7QUFDN0MsSUFBWSxjQUFjLFdBQU0saUJBQWlCLENBQUMsQ0FBQTtBQUNsRCxJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDeEMsSUFBWSxRQUFRLFdBQU0sVUFBVSxDQUFDLENBQUE7QUFDckMsSUFBWSxNQUFNLFdBQU0sMkJBQTJCLENBQUMsQ0FBQTtBQUNwRCxJQUFZLEdBQUcsV0FBTSx5QkFBeUIsQ0FBQyxDQUFBO0FBRS9DLElBQUksR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBRXBCLGdCQUFnQjtBQUNoQixHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ25ELEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDM0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0FBQzFCLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQztBQUVqRCxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxhQUFhLENBQUM7QUFDaEQsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDeEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0FBQzVCLENBQUM7QUFFRCxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUM7QUFDdEIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsR0FBRyxNQUFNLENBQUMsQ0FBQztBQUVsRCxTQUFTO0FBQ1QsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUUzQixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtJQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMscURBQXFELEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDL0YsQ0FBQyxDQUFDLENBQUM7QUFFUSxXQUFHLEdBQUcsR0FBRyxDQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCAqIGFzIGVycm9ySGFuZGxlciBmcm9tIFwiZXJyb3JoYW5kbGVyXCI7XG5pbXBvcnQgKiBhcyBtZXRob2RPdmVycmlkZSBmcm9tIFwibWV0aG9kLW92ZXJyaWRlXCI7XG52YXIgYm9keVBhcnNlciA9IHJlcXVpcmUoJ2JvZHktcGFyc2VyJyk7XG5pbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgKiBhcyByb3V0ZXMgZnJvbSBcIi4vc2VydmVyLXNyYy9yb3V0ZXMvaW5kZXhcIjtcbmltcG9ydCAqIGFzIGFwaSBmcm9tIFwiLi9zZXJ2ZXItc3JjL3JvdXRlcy9hcGlcIjtcblxudmFyIGFwcCA9IGV4cHJlc3MoKTtcblxuLy8gQ29uZmlndXJhdGlvblxuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbmFwcC51c2UobWV0aG9kT3ZlcnJpZGUoKSk7XG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKF9fZGlybmFtZSArICcvZnJvbnRlbmQnKSk7XG5cbnZhciBlbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnO1xuaWYgKGVudiA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGFwcC51c2UoZXJyb3JIYW5kbGVyKCkpO1xufVxuXG52YXIgZGJOYW1lID0gJ3VzZXJEQic7XG5tb25nb29zZS5jb25uZWN0KCdtb25nb2RiOi8vbG9jYWxob3N0LycgKyBkYk5hbWUpO1xuXG4vLyBSb3V0ZXNcbmFwaS5pbml0KGFwcCk7XG5hcHAuZ2V0KCcvJywgcm91dGVzLmluZGV4KTtcblxuYXBwLmxpc3RlbigzMDAwLCBmdW5jdGlvbigpe1xuICAgIGNvbnNvbGUubG9nKFwiRGVtbyBFeHByZXNzIHNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAlZCBpbiAlcyBtb2RlXCIsIDMwMDAsIGFwcC5zZXR0aW5ncy5lbnYpO1xufSk7XG5cbmV4cG9ydCB2YXIgQXBwID0gYXBwOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==