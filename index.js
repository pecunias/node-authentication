const express = require('express')
const app = express()
const port = 3000

const cors = require('cors'); 

const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');
const bodyParser = require('body-parser');

// get config vars
dotenv.config();

// access config var
process.env.TOKEN_SECRET;

function generateAccessToken(username) {
    return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.listen(port, () => {
    console.log(`Node authentication app listening at http://localhost:${port}`)
})

app.post('/api/register', (req, res) => {
    const token = generateAccessToken({ username: req.body.username });
    
    res.json(token);
  });

  