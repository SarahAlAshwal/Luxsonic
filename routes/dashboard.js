const router = require("express").Router();
const authorize = require("../middleware/authorize");
const pool = require("../db");

router.post('/', authorize, async(req, res) => {
    const formInput = req.body;
     pool.query(
    `INSERT INTO forms (firstName, lastName, form_uid, form_date, profission, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
    [formInput.firstName, formInput.lastName, formInput.uid, formInput.date, formInput.profission, req.user.id])
    .then(response => res.status(200))
    .catch(error => console.error(error.message))
  });

  router.get('/', authorize, async(req, res) => {
    pool.query(`SELECT * FROM forms WHERE user_id = $1;`, [req.user.id])
    .then (response => res.send(response.rows))
    .catch(error => console.log(error))
  });
module.exports = router;