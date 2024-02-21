import express from "express";

const PORT = process.env.PORT || 3001;

const serverApp = express();

serverApp.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})