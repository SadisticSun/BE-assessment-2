const RouteController = require('./RouteController')

class IndexRoute extends RouteController {
    constructor(path, data, res) {
        super(path, data, res)
        this.view = 'index'
        this.renderView(this.view, res)
    }
}

module.exports = IndexRoute