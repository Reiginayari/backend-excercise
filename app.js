const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const logMiddleware = require('./middleware/logMiddleware');
const app = express();

//body-parser
app.use(bodyParser.json());

//logging middleware
app.use(logMiddleware);

//user routes
app.use('/users', userRoutes);

//Welcome page
app.get('/', (req, res) => {
    res.send('Welcome!');
});

app.listen(3000, ()=> console.log('Server running on port 3000'));
