const express = require('express')
const app = express();
const port = 3000;
const cors = require('cors')
const bodyParser = require('body-parser')
module.exports = app.listen()

app.use(cors());
app.use(bodyParser.text());

// Generate Pokemon quotes at the bottom when you click on navigation bar

const quotes = ['Even If we don’t understand each other, that’s not a reason to reject each other. There are two sides to any argument. Is there one point of view that has all the answers? Give it some thought.” – Alder', 'Everybody makes a wrong turn once in a while – Ash Ketchum', 'Strong Pokemon. Weak Pokemon. That is only the selfish perception of people. Truly skilled trainers should try to win with all their favorites. – Karen', 'A Caterpie may change into a Butterfree, but the heart that beats inside remains the same. – Brock', 'Make your wonderful dream a reality, it will become your truth. If anyone can, it’s you. – N, Pokemon Black/White', 'I see now that one’s birth is irrelevant. It’s what you do that determines who you are. – Mewtwo','Take charge of your destiny. – Rayquaza', 'There’s no sense in going out of your way to get somebody to like you. – Ash Ketchum', 'It’s more important to master the cards you’re holding than to complain about the ones your opponent was dealt. – Grimsley', 'Do you always need a reason to help somebody? – Ash Ketchum', 'You see, sometimes friends have to go away, but a part of them stays behind with you. – Ash Ketchum', 'We do have a lot in common. The same earth, the same air, the same sky. Maybe if we started looking at what’s the same, instead of looking at what’s different, well, who knows? – Meowth', 'The important thing is not how long you live. It’s what you accomplish with your life. – Grovyle', 'I will show you that my love for my friends permeates every cell in my body. – N, Pokemon Black/White','Me give up? No way! – Ash Ketchum'];

app.get('/', (req, res) => {
    res.send("Hello Pokemon Fans!")
});

app.get('/pokemon', (req,res) => {
    res.json(quotes);
})

app.get('/pokemon/random', (req, res) => {
    let random = Math.floor(Math.random() * quotes.length)
    console.log(random)
    res.json(quotes[random]);
})

app.listen(port,() => console.log(`App listening on: http://localhost:${port}`));

