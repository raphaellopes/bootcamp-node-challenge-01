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

app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'njk');

const checkAge = age => (age >= 18 ? 'major' : 'minor');

// routes
app.get('/', (req, res) => res.render('index'));
app.post('/check', (req, res) => {
  const { body: { age } } = req;
  return res.redirect(`/${checkAge(age)}?age=${age}`);
});

app.get(
  ['/major', '/minor'],
  (req, res) => {
    const { query: { age } } = req;
    return res.render('result', { age, type: checkAge(age) });
  },
);

app.listen(PORT, () => (
  console.log(`Listening on port http://localhost:${PORT}`)));
