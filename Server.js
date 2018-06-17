const express = require('express');
const app = express();
const path = require('path')
const dataFetch = require('./routes/dataFetch')
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port

app.use('/api', dataFetch);

app.get('*', function(req, res) {
    console.log("come on");
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});
app.listen(process.env.PORT || 80);