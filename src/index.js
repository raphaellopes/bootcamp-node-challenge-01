// vendors
const express = require('express');
const nunjucks = require('nunjucks');

const PORT = 3000;

const app = express();

nunjucks.configure('src/views', {
  autoscape: true,
  express: app,
  watch: true,
});

app.set('view engine', 'njk');

// routes
app.get('/', (req, res) => res.render('index'));

app.listen(PORT, () => (
  console.log(`Listening on port http://localhost:${PORT}`)));
