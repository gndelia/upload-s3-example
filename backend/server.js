const express = require('express');
const app = express();
const http = require('http').Server(app);
const fileUpload = require('express-fileupload');
const cors = require('cors');
const storage = require('./hostStorage');

app.use(fileUpload());
app.use(cors());

const backendPort = 8001;

app.post('/upload', async (req, res) => {
    try {
        await storage.store(req.files.file);
        res.sendStatus(200);
    }
    catch {
        res.sendStatus(500);
    }
});

http.listen(backendPort);