const express = require('express');
const cors = require('cors')
require('dotenv').config()
console.log({'env': process.env})

const app = express();
app.use(cors({optionsSuccessStatus: 200}))

const absolutePath =  __dirname + '/views/index.html'

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(absolutePath);
})

app.use('/api/whoami', (req, res) => {
    const ip = req.ip
    console.log({ip})
})

const listener = app.listen(process.env.PORT, (req, res) => {
    console.log('Listening on port' + listener.listen().port)
})