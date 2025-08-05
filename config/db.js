// config/db.js
import mysql from 'mysql2';

// MySQL connection configuration
const db = mysql.createConnection({
  host: 'localhost',  // Your database host
  user: 'root',       // Your database username
  password: 'n3u3da!', // Your database password
  database: 'finnhub_database' // Your database name
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  } 
});

export {db};
