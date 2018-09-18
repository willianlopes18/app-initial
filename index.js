const express = require('express');
var bodyParser = require('body-parser');
const path = require('path');
const fetch = require('node-fetch');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

app.post('/login', (req,res) => {
    console.log(req.body)
    fetch('https://gruponewtech.com.br/inc/usuario/login',{
        method:'POST',
        headers: {
            'Content-Type':'application/json',
            'convenio-app': '68b385bc7b9a40a0d2981e3d9ba45126'
        },
        mode: 'cors',
        body: JSON.stringify(req.body)
    })
    .then(res => res.json())
    .then(token => res.send(token))
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);