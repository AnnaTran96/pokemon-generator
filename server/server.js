const express = require('express')
const app = express();
const port = 3000;
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.text());

app.get('/', (req, res) => {
    console.log(res.statusCode)
    res.send("Hello Pokemon Fan!")
});

app.listen(port,() => console.log(`App listening on: http://localhost:${port}`));