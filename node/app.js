const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'web' directory
app.use(express.static(path.join(__dirname, '../web')));

// API endpoint for "Hello World"
app.get('/api/hello', (req, res) => {
    res.send('Hello from Node.js Backend!');
});

// Catch-all to serve index.html for any other routes (e.g., for SPAs)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../web', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
