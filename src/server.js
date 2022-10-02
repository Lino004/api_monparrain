const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { server } = require('./config');
const { generateRoutes } = require('./routes');


const app = express();

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

generateRoutes(app);

app.listen(server.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on ${server.hostname}: ${server.port}`);
});
