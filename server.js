const express = require('express'); // Here
var favicon = require('serve-favicon')
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist'));
// app.use(favicon(__dirname + '/dist/favicon.ico'));
app.use(favicon(__dirname + '/dist/favicon.ico'));
// app.use(favicon(path.join(__dirname,'dist','favicon.ico')));


app.listen(process.env.PORT || 8080);

//path location strategy
app.get('/*',function(req,res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
})

console.log('console listeing!');