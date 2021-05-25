const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");

//registering

router.post("/register", async (req,res) => {
  try {

    //1. Destructure the req.body(username, email, password)
    
      const { username, email, password } = req.body

    //2. Check if user exist (if user exist then throw error)

    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email
    ]);

    if (user.rows.length !== 0) {
      return res.status(401).send("User already exist!")
    }

    //3. Bcrypt the user password

    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);

    const bcryptPassword = await bcrypt.hash(password, salt);

    //4. Enter the new user inside our db

    const newUser = await pool.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
      [username, email, bcryptPassword]
      );

    //5. Generating our jwt token

    const token = jwtGenerator(newUser.rows[0].user_id);

    res.json({token});

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//login route

router.post("/login", async (req,res) => {
  try {

    //1. Destructure the req.body
    
    const { username, password } = req.body;

    //2. Check if user doesn't exist(if not then we throw error)

    const user = await pool.query("SELECT * FROM users WHERE username = $1", [
      username
    ]);

    if (user.rows.length === 0) {
      return res.status(401).json("Username or Password is incorrect!");
    }

    //3. Check if incoming password is the same as the database password

    const validPassword =  bcrypt.compare(
      password, 
      user.rows[0].user_password);

    if(!validPassword) {
      return res.status(401).json("Username or Password is incorrect!")
    }

    //4. Give them jwt token

    const token = jwtGenerator(user.rows[0].user_id);

    res.json({token});
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
})

module.exports = router;
