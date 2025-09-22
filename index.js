const express = require('express');
const db = require('./db');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

db.sync();

app.use(express.json());

app.get('/', (req, res) => {
    res.redirect('/login');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/tasks', (req, res) => {
    res.render('tasks');
});

app.use('/api/user', require('./routes/userRoutes'));
app.use('/api/task', require('./routes/taskRoutes'));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});