var got = require('got');

var API = {
    getPage: function(page) {
        return got(`http://yitv.herokuapp.com/?page=${page}`, { json: true })
            .then(function(response) {
                return response.body;
            })
            .catch(function(error) {
                throw Error('API Error');
            });
    }
};

module.exports = API;