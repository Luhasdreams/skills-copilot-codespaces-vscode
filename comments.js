// Create Web server
// 1. Import Express
const express = require('express');
const app = express();
const PORT = 4000;

// 2. Create a route
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/comments', (req, res) => {
    res.json({
        comments: [
            {
                username: 'Todd',
                comment: 'lol so funny'
            },
            {
                username: 'Skyler',
                comment: 'I like to go birdwatching with my dog'
            },
            {
                username: 'Sk8erBoi',
                comment: 'Plz delete your account, Todd'
            },
            {
                username: 'onlysayswoof',
                comment: 'woof woof woof'
            }
        ]
    });
});

// 3. Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
// 4. Run the server
// node comments.js
// Then visit http://localhost:4000/comments
// You should see the JSON data in your browser
// If you see "Cannot GET /comments" instead, it means you didn't create a route for the /comments URL