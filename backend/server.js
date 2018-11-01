const express = require('express');
const app = express();
const http = require('http').Server(app);
const fileUpload = require('express-fileupload');
const cors = require('cors');

app.use(fileUpload());
app.use(cors());

const backendPort = 8001;

app.post('/upload', async (req, res) => {
    let filename = req.files.file.name;
    console.log(filename);
    res.sendStatus(200);
});

http.listen(backendPort);