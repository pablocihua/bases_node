require('./config/config');

const express = require('express'),
    bodyParser = require('body-parser'),
    monogoose = require('mongoose'),
    app = express(),
    port = process.env.PORT;

/** Middlewares */

// Parse application/x-www-form-encoded
app.use(bodyParser.urlencoded({ extended: false }));
// Parse application/json
app.use(bodyParser.json());

// Routes
let userRoutes = require('./routes/user');

app.use(userRoutes);

monogoose.connect('mongodb://localhost:27017/coffee', (err, res) => {
    if (err) throw err;

    console.log('Database online');
});

app.listen(port, () => {
    console.log(`Listening request in port ${ port }`)
});