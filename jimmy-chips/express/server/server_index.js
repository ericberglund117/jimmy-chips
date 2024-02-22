import express from "express";
import bodyParser from 'body-parser';
import { allChips, negChips, posChips } from "../../src/utils.js";

const PORT = process.env.PORT || 3001;
const serverApp = express();

const singlePlayer = {
    name: '',
    chips: [],
    score: {},
    full: false,
    holeCount: 1
}
const allPlayers = []

// all players
// single players
// all chips
// selected chips
// 


serverApp.use(bodyParser.json())

serverApp.get('/api/allPlayers', (req, res) => {
    res.json({ "allPlayers": allPlayers })
})

serverApp.post('/api/allPlayers', (req, res) => {
    const newPlayer = req.body
    allPlayers.push(newPlayer);
    res.status(201).json(newPlayer)
})

serverApp.post(`/api/updatePlayer/${singlePlayer.name}`, (req, res) => {
    const updatedPlayer = req.body
    allPlayers.push(updatedPlayer);
    res.status(201).json(updatedPlayer)
})

serverApp.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})