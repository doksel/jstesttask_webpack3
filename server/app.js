import express from "express";
import bodyParser from "body-parser";
import MongoClient from "mongodb";

import * as db from "./DataBaseUtils.js";
db.setUpConnection();
const app = express();
const db;

app.use(bodyParser.json());

app.get('/',(req,res)=>{
    db.listNotes().then(data=>res.send(data));
});

app.post('/notes/:id',(req,res)=>{
     db.createNote(res.body).then(data=>res.send(data));
});

const server = app.listen(8080,()=>{
    console.log('Server running');
});

// mongod --storageEngine=mmapv1 --dbpath C:/mongodb/data/db