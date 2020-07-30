const path = require('path');

const express = require('express');

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

const rootDir = require('./utils/path');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
	//console.log('404 : ' + rootDir);
	res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
	//res.status(404).send('<h1>Page Not Found </h1>');
});

app.listen(3000, () => {
	console.log(`Server started on 3000`);
});
