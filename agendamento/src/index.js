const express = require('express');
const mustacheExpress = require('mustache-express');
const path = require('path');
const routes = require('./routes/index.routes');

const VIEWS_FOLDER = path.join(__dirname, '..', 'views');

const app = express();

app.engine('html', mustacheExpress());

app.set('view engine', 'html');
app.set('views', VIEWS_FOLDER);

app.use(express.static(path.join(__dirname, '..', 'public' )));

app.use(express.urlencoded());
app.use(routes);

app.listen(3000, () => console.log('Server started on port 3000'));
