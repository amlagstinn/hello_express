const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sample_database',
});

connection.connect((err) => {
    if (err) {
        console.error('connection failed while connect to database.', err.stack);
        return;
    }
    console.log('connected into database.');
});

    module.exports = {
        connection
    };
