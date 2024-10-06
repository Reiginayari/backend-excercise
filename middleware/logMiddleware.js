// Middleware to log each request
module.exports = (req, res, next) => {
    console.log(`${req.method} request to ${req.url} at ${new Date().toISOString()}`);
    next();
};
