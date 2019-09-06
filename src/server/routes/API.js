var express = require('express');
var router = express.Router();

var db = require('../config/db'); //引入db
var userSql = require('../config/Sql');

var head = function(value) {
    value.header("Access-Control-Allow-Origin", "*");
    value.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    value.header("Access-Control-Allow-Headers", "X-Requested-With");
    value.header('Access-Control-Allow-Headers', 'Content-Type');
}

router.get("/query", function(req, res, next) {
    head(res);
    db.query(userSql.query, [], function(err, result) {
        console.log(typeof result);
        res.json(JSON.stringify(result));
    });
});
router.post('/add', (req, res, next) => {
    head(res);
    let params = req.body;
    db.query(userSql.insert, [params.date, params.time, params.address, params.name, params.phone, params.type, params.size, params.number], function(err, result) {
    })
});
router.post('/login', (req, res, next) => {
    head(res);
    let params2 = req.body;
    db.query(userSql.rg_query, [], function(err, result) {
        console.log(typeof(req.headers.referer))
        if (req.headers.referer.includes('register.html')) {
            let value = [];
            result.forEach(function(el, index) {
                value.push(el.account)
                console.log(value)
            })
            if (value.includes(params2.account)) {
                res.json('false')
            } else {
                res.json('true')
            }
        } else {
            res.json(JSON.stringify(result))
        }
    })
});
router.post('/register', (req, res, next) => {
    head(res);
    let params3 = req.body;
    console.log(params3.password);
    console.log(params3.account);
    db.query(userSql.rg_insert, [params3.account, params3.password], function(err, result) {
        if (result) {
            res.json('success')
        } else {
            console.log(err)
        }
    })
})

module.exports = router;