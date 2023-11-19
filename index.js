const express = require('express');
const cors = require('cors')
require('dotenv').config()

const app = express();
app.use(cors({optionsSuccessStatus: 200}))

const absolutePath =  __dirname + '/views/index.html'

app.use(express.static('public'));

app.get((req, res, next) => {
    const ip = req.ip;
    console.log(ip)
    res.send(ip);
    next();
}, (req, res) => {
    console.log(res)
})

app.get('/', (req, res) => {
    res.sendFile(absolutePath);
})

app.use('/api/whoami', (req, res) => {
    res.send({
        "ipaddress": req.headers["host"].slice(0, 12),
        "language": req.headers["accept-language"],
        "software": req.headers["user-agent"]
    })
})

const listener = app.listen(process.env.PORT, (req, res) => {
    console.log({'port': listener.address().port})
})