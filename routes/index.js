const router = require('express').Router();
const userRoutes = require('./userRoutes');

module.exports = function (app) {
    app.get('/test', (req, res)=> {
        res.send("yehh!")
    })
    app.use('/user', userRoutes())
    return router;
}