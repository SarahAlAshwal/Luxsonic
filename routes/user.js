const express = require("express");
const router = express.Router();
const pool = require("../db");
const jwtGenerator = require('../utils/jwtGenerator');
const authorize = require('../middleware/authorize');
const { response } = require("express");

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);
  try {
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

    if (user.rows.length > 0) {
      return res.status(401).json("User already exist!");
    }

    let newUser = await pool.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
      [username, email, password]
    );

    const jwtToken = jwtGenerator(newUser.rows[0].user_id);
    
    return res.json({ jwtToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await pool.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password]);
    if (user.rows.length === 0) {
      return res.status(401).json('Invalid Credential');
    }

    const jwtToken = jwtGenerator(user.rows[0].user_id);
    return res.json({ jwtToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.get('/', authorize, async(req, res) => {
  pool.query(`SELECT username FROM users WHERE user_id = $1;`, [req.user.id])
  .then( response => res.send(response.rows[0]))
  .catch(error => console.log(error))
});


module.exports = router;