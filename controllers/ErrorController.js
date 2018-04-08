const Controller = require('./Controller')

class ErrorController extends Controller {

    static throw(error) {
        throw error
    }
}

module.exports = ErrorController