var indexController = require('./controllers/index');

module.exports = function(app){
    app.get('/(:page)?', indexController);
};