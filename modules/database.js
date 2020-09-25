var mysql = require('mysql');

var dbAccess = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'calibre'
}

var db = mysql.createPool(dbAccess);

function connection(db) {
  return function query(sql, values) {
    return new Promise(function (resolve, reject) {
      db.query(sql, values, function (err, res) {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  };
}

var query = connection(db);

module.exports = query;