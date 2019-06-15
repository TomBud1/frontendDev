//http://127.0.0.1:4000/api/tvs

const TvDb = require('./models/TvDb');
const Tv = require('./models/Tv');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    next();
});

const tvDb = new TvDb();

app.get('/api/tvs', (req, res) => {
    res.send(tvDb.AllModelsInDb());
});

app.get('/api/tvs/:id', (req, res) => {
    const tv = findTv(req);
    if (!tv) res.status(404).send({ message: "Cannot find tv in DB." });
    else res.send(tv);
});

app.post("/api/tvs/", (req, res) => {
    const { company, model, size, smartTV, HDMI, USB } = req.body;
    if (tvDb.tvs.some(tvInDb => tvInDb.model === model)) {
        res.send({ message: "Tv already exists in DB!" });
        return;
    }
    tvDb.addTv(company, model, size, smartTV, HDMI, USB);
    res.send({ message: "Tv added." });
});

app.put('/api/tvs/:id', (req, res) => {
    const tv = findTv(req);
    if (!tv) res.status(404).send("Cannot find tv in DB.");
    else {
        const id = parseInt(req.params.id);
        tvDb.updateTv(req.body, id)
        res.send({ message: "Tv has been updated" });
    }
});

app.delete("/api/tvs/:id", (req, res) => {
    const tv = findTv(req);
    if (!tv) res.status(404).send("The tv hasn't been found.");
    else {
        tvDb.tvs = tvDb.tvs.filter(
            tvInDb => tvInDb !== tv
        );
        res.send({ message: "The tv has been deleted" });
    }
});

findTv = req => {
    return tvDb.tvs.find(tv => tv.id === parseInt(req.params.id));
};

app.listen(port, () => console.log('Example app listening on port %s', port));
