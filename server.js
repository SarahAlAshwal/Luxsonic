const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 5000;
const cors = require('cors');
const pool = require('./db');

app.use(cors());

const test = pool.query(`INSERT INTO users (username, password) VALUES ('User10', 'test00') RETURNING *;`);

app.post('/dashboard', async(req, res) => {
try {
  const { formInput } = req.body;
  const { newInput } = await pool.query(
  `INSERT INTO forms (firstName, lastName, form_uid, form_date) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
  [formInput.firstName, formInput.lastName, formInput.uid, formInput.date, formInput.profession]
  );
  res.json(newInput.rows[0]);
  }
  catch (error) {
    console.error('backend', error.message);
}
});

//middleware
app.use(cors());
app.use(express.json());

app.listen(port, () => console.log(`server listen on port ${port}`));