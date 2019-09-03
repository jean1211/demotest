var express = require('express');
var router = express.Router();

var db = require('../config/db'); //引入db
var userSql = require('../config/Sql');

router.get("/", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    db.query(userSql.query, [], function(err, result) {
        console.log(typeof result);
        res.json(JSON.stringify(result));      
    });
});
router.post('/add', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    var params = req.body;
    db.query(userSql.insert, [params.date,params.time, params.address, params.name, params.phone, params.type, params.size, params.number], function(err, result) {
        console.log('result');
    })
})

module.exports = router;