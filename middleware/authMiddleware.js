//check for valid auth token
module.exports = (req, res, next) => {
    const token = req.header('Authorization');
    if(token === 'mock-token'){
        req.user = {id: 1};
        next();
    }else {
        resizeBy.status(401).send('Access denied');
    }
};

