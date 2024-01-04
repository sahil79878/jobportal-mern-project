// const express = require('express');
import express from 'express';
import bodyparser from 'body-parser';
//const dotenv = require('dotenv');
import dotenv from 'dotenv';
import cors from 'cors';
import { router } from './routers/routes.js';
import path from 'path';
const app = express();

import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// static file
app.use(express.static(path.join(__dirname, "./frontend/build")));

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, '/frontend/build', 'index.html'));
});

dotenv.config();

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(cors());
app.use('/public', express.static('public'))
app.use(router);
app.get("/", (req,res) => {
    res.send("Node Js Application");
});


app.listen(process.env.PORT, ()=> { 
    console.log(`Start ${process.env.APPLICATION_MODE} in Port : ${process.env.PORT} `);
});


