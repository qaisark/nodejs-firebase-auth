const express = require("express");
const path = require("path");

const port = process.env.PORT || "8000";

const connectDB = require('./config/db');

const app = express();


//Initail Middleware
app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('API running'));
app.use('/api/auth', require('./routes/api/auth/auth'));
app.use('/api/register', require('./routes/api/auth/register'));

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});