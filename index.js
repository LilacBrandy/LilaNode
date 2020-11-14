const { ifError } = require('assert');
const { response } = require('express');
const express = require('express');
const { readFile } = require('fs');
const { request } = require('http');
const app = express();

app.get('/', (request, response) => {
    readFile("./home.html", "utf8", (err, html)=>{

        if (err) {

            response.status(500).send("You suck!")
        }

        response.send(html);
    })
});

app.listen(process.env.PORT || 3000, () => console.log("App available on port 3000"));

