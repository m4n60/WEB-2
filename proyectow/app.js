const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',             
    password: '1703', 
    database: 'pro_w'
});

db.connect(err => {
    if (err) {
        console.error(' Error conectando a MySQL: ' + err.stack);
        return;
    }
    console.log(' Conectado a la Base de Datos MySQL con ID ' + db.threadId);
});

app.post('/api/login', (req, res) => {
    const { usuario, password } = req.body;
    if (usuario === 'entrenador' && password === '1703') {
        res.json({ success: true, message: 'Bienvenido' });
    } else {
        res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
    }
});

app.get('/api/usuarios', (req, res) => {
    db.query('SELECT * FROM usuarios', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

app.post('/api/usuarios', (req, res) => {
    const { nombre, email, rol } = req.body;
    const sql = 'INSERT INTO usuarios (nombre, email, rol) VALUES (?, ?, ?)';
    db.query(sql, [nombre, email, rol], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ id: result.insertId, nombre, email, rol });
    });
});

app.put('/api/usuarios/:id', (req, res) => {
    const { nombre, email, rol } = req.body;
    const { id } = req.params;
    const sql = 'UPDATE usuarios SET nombre = ?, email = ?, rol = ? WHERE id = ?';
    db.query(sql, [nombre, email, rol, id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ success: true });
    });
});

app.delete('/api/usuarios/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM usuarios WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ success: true });
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(` Servidor corriendo en http://localhost:${PORT}`);
});