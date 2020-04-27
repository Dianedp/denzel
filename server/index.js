const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const {PORT} = require('./constants');
const { IMDB_NAME_URL, IMDB_URL, P_LIMIT } = require('./constants');
const app = express();

module.exports = app;

app.use(require('body-parser').json());
app.use(cors());
app.use(helmet());

app.options('*', cors());

app.get("/movies/populate/:id", (request, response) => {
    collection.findOne({ "_id": new ObjectId(request.params.id) }, (error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

app.get('/', (request, response) => {
  response.send({'ack': true});
});

app.listen(PORT);
console.log(`📡 Running on port ${PORT}`);
