const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// Middleware to handle errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    // Log the error stack for debugging
    if (res.headersSent) {
        return next(err);
    }else {
    if (err.name === 'SyntaxError' && err.status === 400 && 'body' in err) {
        // Handle JSON parsing errors
        return res.status(400).json({ error: 'Invalid JSON' });
    }else {
    if (err.name === 'TypeError') {
        // Handle type errors
        return res.status(400).json({ error: 'Type error occurred' });
    }else {
    if (err.name === 'ReferenceError') {
        // Handle reference errors
        return res.status(400).json({ error: 'Reference error occurred' });
    }else {
    if (err.name === 'RangeError') {
        // Handle range errors
        return res.status(400).json({ error: 'Range error occurred' });
    }else {
    if (err.name === 'ValidationError') {
        // Handle validation errors
        return res.status(400).json({ error: err.message });
    }else {
    if (err.name === 'UnauthorizedError') {
        // Handle unauthorized access
        return res.status(401).json({ error: 'Unauthorized' });
    }else {
    if (err.name === 'ForbiddenError') {
        // Handle forbidden access
        return res.status(403).json({ error: 'Forbidden' });
    }else{
        if (err.name === 'NotFoundError') {
        // Handle not found errors
        return res.status(404).json({ error: 'Not Found' });
    }    else {
    console.error('Unhandled error:', err);
    res.status(500).send('Something broke!');
}}}}}}}}}
});

app.use(express.json());
// Middleware to parse JSON bodies
app.use(bodyParser.json());
// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
// Middleware to handle CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(204);
    }
    next();
    });