const users = require('../models/userModel');

//function to register a new user
exports.register = (req, res) => {
    const {id, username, password, email} = req.body;
    users.push({id, username, password, email});
    res.status(201).send('User registered');
};

//function for user login
exports.login = (req, res) => {
    const {username, password} = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if(user){
        res.status(200).send(`Login successful. Welcome, ${user.username}!`);
    }else{
        res.status(401).send('Invalid credentials');
    }
};

//function to get user profile
exports.profile = (req, res) => {
    const {id} = req.user;
    const user = users.find(u => u.id === id);
    if(user){
        res.status(200).json(user);
    }else{
        res.status(404).send('User not found');
    }
};
