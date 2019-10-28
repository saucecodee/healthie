module.exports = {
     BadRequest: class BadRequest extends Error {
          constructor(message) {
               super(message);
               this.name = this.constructor.name;
               this.status = 400
          }
     },

     NotFound: class NotFound extends Error {
          constructor(message) {
               super(message);
               this.name = this.constructor.name;
               this.status = 404
          }
     },

     Unauthorized: class Unauthorized extends Error {
          constructor(...params) {
               super(...params);
               this.name = this.constructor.name;
               this.status = 401
          }
     }
}