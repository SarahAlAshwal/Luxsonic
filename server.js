const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 5000;
const cors = require('cors');
const pool = require('./db');
const { restart } = require('nodemon');

app.use(cors());

app.post('/dashboard', async(req, res) => {
try {
  const { formInput } = req.body;
  const { newInput } = await pool.query(
  `INSERT INTO forms (firstName, lastName, form_uid, form_date, profission) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
  [formInput.firstName, formInput.lastName, formInput.uid, formInput.date, formInput.profession]
  );
  res.status(200);
  }
  catch (error) {
    console.error('backend', error.message);
}
});

app.post('/user', async(req, res) => {
  console.log.apply(req)
    const { username, password } = req.body;
     pool.query(
      `SELECT * FROM users WHERE username = $1 AND password = $2;`, [username, password]
    ).then (response => res.send(response.rows[0]) )
      .catch(error => console.log(error));
});

//middleware
app.use(cors());
app.use(express.json());

app.listen(port, () => console.log(`server listen on port ${port}`));