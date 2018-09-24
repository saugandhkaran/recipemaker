const express = require('express');
const csv = require('csvtojson');
const http = require('http');

const app = express();

app.listen(8000, () => {
    console.log('Server started!');
  });

app.route('/getAllComponents').get((req,res) => {
    http.get('https://connectors-3361.restdb.io/rest/connectors', (resp) =>{
        let data = '';

        resp.on('data',(chunk) =>{
            data += chunk;
        });

        resp.on('end',() => {
            
        })
    })
});