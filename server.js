const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
const port = 5000;

app.use('/user', require('./routes/user'));
app.use('/dashboard', require('./routes/dashboard'));

app.listen(port, () => console.log(`server listen on port ${port}`));