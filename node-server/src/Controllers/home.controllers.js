const fs = require('fs');
const { v4: uuidv4 } = require('uuid');



const homePage= (req, res, next) => {
	res.render('home', { title:'dummy', content: 'Hello world'});
}

module.exports = {
	homePage
};
