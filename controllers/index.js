var API = require('../libs/api');

function indexController(req, res, next) {
    API.getPage(req.params.page)
        .then(function(data) {
            data.pages = [];
            for (var i = 1; i <= data.page.total; i++) {
                data.pages.push({
                    page: i,
                    active: i === data.page.current
                });
            }

            res.render('page', data);
        })
        .catch(function(error) {
            res.send(error);
        });
}

module.exports = indexController;