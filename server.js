const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
const port = 5000;

app.post('/dashboard', async(req, res) => {
try {
  const { formInput } = req.body;
  const { newInput } = await pool.query(
  `INSERT INTO forms (firstName, lastName, form_uid, form_date, profission, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
  [formInput.firstName, formInput.lastName, formInput.uid, formInput.date, formInput.profission, user]
  );
  res.status(200);
  }
  catch (error) {
    console.error('backend', error.message);
}
});

app.post('/user', async(req, res) => {
  const { username, password } = req.body;
  pool.query(
    `SELECT * FROM users WHERE username = $1 AND password = $2;`, [username, password]
    ).then (response => {
      res.send(response.rows[0])
    })
      .catch(error => console.log(error));
});

app.get('/dashboard', async(req, res) => {
  pool.query(`SELECT * FROM forms WHERE user_id = $1;`, [user])
  .then (response => res.send(response.rows))
  .catch(error => console.log(error))
});

app.listen(port, () => console.log(`server listen on port ${port}`));