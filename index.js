
const express = require('express');
const { sendFile } = require('express/lib/response');
const app = express();

app.get('/', function(req, res) {
    res.sendFile('/index.html');
})

app.listen(process.env.PORT || 5000);