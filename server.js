const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const pool = require('./db');

//middleware
app.use(cors());
app.use(express.json());

app.listen(port, () => console.log(`server listen on port ${port}`));