const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../utils/path');

router.get('/add-product', (req, res, next) => {
	// res.send(
	// 	'<html><body><h1>Add Product</h1><form action="/admin/product" method="POST"><input type="text" name="title"/><button type="submit">Add Product</button></form></body></html>',
	// );
	//console.log('add-product : ' + rootDir);
	//res.sendFile(path.join(__dirname, "../", 'views', 'add-product.html'));
	res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res) => {
	console.log(req.body);
	res.redirect('/');
});

module.exports = router;
