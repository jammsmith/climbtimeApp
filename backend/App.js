const express = require('express');
const competitions = require('./data/competitions');

const app = express();

app.get('/', (req, res) => {});

app.get('/api/competitions', (req, res) => {
	res.json(competitions);
});

app.get('/api/competitions/:id', (req, res) => {
	const comp = competitions.find((c) => c._id == req.params.id);
	res.json(comp);
});

app.listen(3001, console.log('Server running on port 3001'));
