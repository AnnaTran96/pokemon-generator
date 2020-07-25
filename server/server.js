const express = require('express')
const app = express();
const port = 3000;
const cors = require('cors')
const bodyParser = require('body-parser')
module.exports = app.listen()

app.use(cors());
app.use(bodyParser.text());

app.get('/', (req, res) => {
    res.send("Hello World")
});

app.listen(port,() => console.log(`App listening on: http://localhost:${port}`));