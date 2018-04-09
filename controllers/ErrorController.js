const Controller = require('./Controller')

class ErrorController extends Controller {
    
    /** Throw supplied error
     * @param {any} error // An error object or string to throw
     */
    static throw(error) {
        throw error
    }
}

module.exports = ErrorController