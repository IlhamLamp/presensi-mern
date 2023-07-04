// Our Dependecies
const express = require('express');
const session = require('express-session');
const app = express();
const APP_KEY = '私といるより楽しまないで'
const mysql = require('mysql');
const cors = require('cors');

app.use(express.json());
app.use(session({
    secret: APP_KEY,
    resave: false,
    saveUninitialized: false
}));
app.use(cors());

// Let us run the server. So its running
app.listen(3002, () => {
    console.log('Server is running on port 3002');
});

// Let us create our database (mysql)
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '', //If you have set xampp password please enter it here
    database: 'sekolahdb',
})

// register
app.post('/register', (req, res) => {
    const sentNisn = req.body.Nisn
    const sentNama = req.body.Nama
    const sentKelas = req.body.Kelas
    const sentPassword = req.body.Password

    // Lets create SQL statement to insert the user to the Database table Users
    const SQL = 'INSERT INTO siswa (nisn, nama, kelas, password) VALUES (?,?,?,?)'
    const Values = [sentNisn, sentNama, sentKelas, sentPassword]

    // Query to execute the sql statement stated above
    db.query(SQL, Values, (err, results) => {
        if (err) {
            res.send(err)
        }
        else {
            console.log('Siswa inserted successfully!');
            res.send({ message: '🧑 Siswa baru telah ditambahkan !' })
        }
    })
})

// login
app.post('/login', (req, res) => {
    const sentloginNisn = req.body.LoginNisn
    const sentLoginPassword = req.body.LoginPassword

    // Lets create SQL statement to insert the user to the Database table Users
    const SQL = 'SELECT * FROM siswa WHERE nisn = ? && password = ?'
    const Values = [sentloginNisn, sentLoginPassword]

    // Query to execute the sql statement stated above
    db.query(SQL, Values, (err, results) => {
        if(err) {
            res.send({error: err})
        }
        if(results.length > 0) {
            res.send(results)
        }
        else{
            res.send({message: `Credentials Siswa Don't match!`})
        }
    })
})

// guru
app.post('/guru', (req, res) => {
    const sentLoginNip = req.body.LoginNip
    const sentLoginPassword = req.body.LoginPassword

    // SQL Statement
    const SQL = 'SELECT * FROM guru WHERE nip = ? && password = ?'
    const Values = [sentLoginNip, sentLoginPassword]

    // Query
    db.query(SQL, Values, (err, results) => {
        if(err) {
            res.send({error: err})
        }
        if(results.length > 0) {
            const guruId = results[0].id
            req.session.guru_id = guruId

            // save
            const sessionSQL = 'INSERT INTO sessions_guru(id, guru_id, created_at) VALUES (?, ?, CURRENT_TIMESTAMP)'
            const sessionValues = [req.sessionID, guruId];
            db.query(sessionSQL, sessionValues, (sessionErr, sessionResult) => {
                if (sessionErr) {
                    res.send({error: sessionErr});
                } else {
                    res.send({guruId: guruId, results: results})
                }
            })
        }
        else{
            res.send({message: `Credentials Guru Don't Match!`})
        }
    })
})

app.post('/logout', (req, res) => {
    // Check if session exists
    if (req.session.guru_id) {
        const deleteSessionSQL = 'DELETE FROM sessions_guru WHERE guru_id = ?';
        const guruID = req.session.guru_id;
        db.query(deleteSessionSQL, guruID, (sessionErr, sessionResult) => {
            if (sessionErr) {
                res.send({ error: sessionErr });
            } else {
                // Destroy the session
                req.session.destroy(err => {
                    if (err) {
                    console.log(err);
                    // Penanganan kesalahan saat menghapus sesi
                    res.status(500).send({ error: 'Failed to destroy session' });
                    } else {
                    // Sesukses logout
                    res.status(200).send({ message: 'Logout successful' });
                    }
                })
            }
        }) 
    }
});