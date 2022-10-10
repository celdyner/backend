const express = require('express');
const connectDB = require('./config/db');
// const routes = require('./routes/api/auth');
// const routes = require('./routes/api/posts');
// const routes = require('./routes/api/profiles');
// const routes = require('./routes/api/users');

const app = express();

//Connect Database
connectDB();

//To test the connection
app.get('/', (req, res) => res.send('API Running'));

//Define Routes
app.use('/api/user', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'))

const PORT  = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`server started at ${PORT}`));