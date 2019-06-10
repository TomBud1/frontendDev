//http://127.0.0.1:4000/api/tvs

const TvDb = require ('./models/TvDb');
const Tv = require ('./models/Tv');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

const tvs = new TvDb();

// const numbers = [];

// app.get('/api', (req,res) => res.send('Hi there'));

// app.get('/api/numbers/all', (req, res) => {
//     res.send(numbers);
// });

// app.post('/api/numbers', (req, res) => {
//     const number = req.body.number;
//     numbers.push(number);
//     res.send({"message:": "number has been added"});
// });

app.listen(port, () => console.log('Example app listening on port %s', port));

app.get('/api/tvs', (req,res) => {
    res.send(tvs.AllModelsInDb());
});

app.get('/api/tvs/:id', (req,res) => {
const tv = findTv(req);
if(!tv) res.status(404).send("Cannot find tv in DB");
else res.send(tv);
});