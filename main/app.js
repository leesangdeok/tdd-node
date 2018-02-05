const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const NODE_ENV = process.env.NODE_ENV;
const PORT = 3000;
const HOSTNAME = '127.0.0.1';

/*
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(JSON.stringify(result));
});

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
*/
/* express */

const express = require('express');

/* routes */
var routes = require('./routes/index.js');

/* express instance */
const app = express();

/* config middleware */
// app.configure(function(){
    /*
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');  
    if (NODE_ENV === 'product') {
        app.use(express.errorHandler());
    } else if (NODE_ENV === 'develop' || NODE_ENV === 'stage') {
        app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    }
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
    */
    // app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));
// });



app.use('/', routes);


// var server   = http.createServer(app);
// server.listen(1337, function() {
//   console.log("Node server running on http://localhost:1337");
// });
// const server = http.createServer(app);
app.listen(PORT, () => {
    console.log('Example app listening on port 3000!');
});


module.exports = app;