var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('static'));
app.use('/angular', express.static('node_modules/angular'));
app.use(bodyParser.json());
app.post('/', function(req, res){
    res.write("success");
    res.end();
    console.log(req.body.name);
    console.log(req.body.email);
});
app.listen(8080, function(){
    
    console.log('Сервер запущен на порте 8080');
});
