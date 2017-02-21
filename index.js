var express = require('express');
var app = express();
var router = require('./routers');

app.use('/static', express.static(__dirname + '/static'));

app.set('view engine', 'hbs');
app.set('views', './templates');

router(app);

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});