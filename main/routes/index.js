var express = require('express');
var router = express.Router();

let result = {"code": 200, "message": "success"}

router.get('/', (req, res) => {
    res.send('Hello World!\n');
});

router.get('/api', (req, res) => {    
    if(req.query.callback != undefined){
        callbackJsonp(res, result, req.query.callback);
    }else{
        callbackJson(res, result);
    }
});

const callbackJsonp = function(res, obj, callbackParam) {
    console.log("call jsonp >> ");
    // res.json(callbackParam+'('+obj+')');
    res.setHeader('Content-Type', 'text/plain');
    // res.writeHead(200, {"Content-Type" : "text/html;charset=utf-8"});
    res.write(callbackParam + '(' + JSON.stringify(obj) + ')');    
    res.end();
} 

const callbackJson = function(res, obj) {    
    console.log("call json >> ");
    // res.json(obj);
    res.setHeader('Content-Type', 'text/plain');
    // res.writeHead(200, {"Content-Type" : "text/html;charset=utf-8"});  
    res.write(JSON.stringify(obj));    
    res.end();
}

module.exports = router;