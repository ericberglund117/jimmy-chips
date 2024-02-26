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
    // create log in for:
// game records
    

//side note with score
    // have buttons/dropdown 1 - 10 for players to click instead of entering score like grint/18birdies


serverApp.use(bodyParser.json())

//get all players
serverApp.get('/api/allPlayers', (req, res) => {
    res.json({ "allPlayers": allPlayers })
})
//get single player
serverApp.get(`/api/${singlePlayer.name}`, (req, res) => {
    const result =  allPlayers.find(player => player.name === singlePlayer.name)
    res.json({ "singlePlayer": result })
})
//add player 
serverApp.post('/api/allPlayers', (req, res) => {
    const newPlayer = req.body
    allPlayers.push(newPlayer);
    res.status(201).json(newPlayer)
})
//update single player info
serverApp.post(`/api/updatePlayer/${singlePlayer.name}`, (req, res) => {
    const updatedPlayer = req.body
    const playerUpdate = allPlayers.find(player => player.name === singlePlayer.name)
    let index = allPlayers.indexOf(singlePlayer)
    if (~index) {
        allPlayers[index] = playerUpdate
    }
    res.status(201).json(updatedPlayer)
})

serverApp.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})