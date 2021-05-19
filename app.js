const express = require("express"); 
const app = express(); 

app.use(express.json()); 

app.use(express.static(__dirname + '/public/welcome'));
app.use(express.static(__dirname + '/public/js_intro'));
app.use(express.static(__dirname + '/public/nodejs'));
app.use(express.static(__dirname + '/public/npm'));
app.use(express.static(__dirname + '/public/express'));
app.use(express.static(__dirname + '/public/rest_api'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/public/welcome/welcome.html");
});

app.get('/js_intro', (req, res)=>{
    res.sendFile(__dirname + "/public/js_intro/js_intro.html");
});

app.get('/nodejs', (req, res)=>{
    res.sendFile(__dirname + "/public/nodejs/nodejs.html");
});

app.get('/npm', (req, res)=>{
    res.sendFile(__dirname + "/public/npm/npm.html");
});

app.get('/express', (req, res)=>{
    res.sendFile(__dirname + "/public/express/express.html");
});

app.get('/rest_api', (req, res)=>{
    res.sendFile(__dirname + "/public/rest_api/rest_api.html");
});

app.listen(8080, err =>{ 
    if (err)
        console.log(err);
    else
        console.log("Server running on port", 8080);
});