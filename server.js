const express = require('express')
const app = express()
const cors = require('cors')
const port = 3001
const bitcoin = require('./data/bitcoin.json');
const markets = require('./data/markets.json');

app.use(cors())

app.get('/bitcoin', (req, res) => res.json(bitcoin))

app.get('/markets', (req, res) => res.json(markets))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))