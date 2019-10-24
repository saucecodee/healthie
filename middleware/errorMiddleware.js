const errors = require("../config/errors")
const { response } = require("../config/messages")


module.exports = (app) => {

     app.use((req, res, next) => {
          try {
               throw new errors.NotFound("Resource not found")
          } catch (error) {
               next(error);
          }
     });

     app.use((error, req, res, next) => {
          console.log(error)

          if (Object.keys(errors).includes(error.name)) {
               res.status(error.status).send(response(error.message, null, false));
          } else {
               res.status(500).send(response("Sorry something happened", null, false));
          }
     });

     return app
}