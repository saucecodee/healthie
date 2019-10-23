const router = require('express').Router();
const userRoutes = require('./userRoutes');
const doctorRoutes = require('./doctorRoutes');

module.exports = function (app) {
    app.get('/test', (req, res)=> {
        res.send("yehh!")
    })
    app.use('/user', userRoutes())
    app.use('/doctors', doctorRoutes())
    return router;
}