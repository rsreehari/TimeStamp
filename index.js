var express = require("express");
var timeStampMs = express();
var time = require("./time.js");
var port = Number(process.env.PORT||8080);

// Add CORS headers
timeStampMs.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Root route
timeStampMs.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

// Time route
timeStampMs.get('/:time', function(req, res) {
    var data = req.params;
    var result = time(data.time);
    res.json(result);
});

// Serve static files
timeStampMs.use('/', express.static(__dirname + '/public'));

// 404 handler
timeStampMs.use(function(req, res) {
    res.status(404).json({
        unix: null,
        natural: null,
        error: "Invalid route"
    });
});

timeStampMs.listen(port, function() {
    console.log('Timestamp microservice running on port ' + port);
});