var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'express-order'
});

function query(sql, values, callback) {
    pool.getConnection(function(err, connection) {
        connection.query(sql, values, function(err, result) {
        callback(err,result);
        connection.release();
    });
})
}

exports.query = query;