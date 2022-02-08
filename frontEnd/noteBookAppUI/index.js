const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'dist')));
// app.use(express.static(path.join(__dirname,"frontEnd","noteBookAppUI","dist")))
app.get('', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`front end running at http://localhost:${port}`);
});