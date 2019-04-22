// vendors
const express = require('express');

const PORT = 3000;

const app = express();

// routes
app.get('/', (req, res) => res.send('Starting the project!'));

app.listen(PORT, () => (
  console.log(`Listening on port http://localhost:${PORT}`)));
