const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/con-fusion'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/serene-shelf-94742/index.html'));});
app.listen(process.env.PORT || 8080);
