const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Models/user");

const layout = 'layouts/cms';
const dashboardPage= async (req, res, next) => {
	res.render('cms/dashboard', {layout, content: 'This is CMS dashboard'});
}

const loginPage= (req, res, next) => {
	res.render('cms/login', {layout });
}

module.exports = {
	loginPage,
	dashboardPage
};
