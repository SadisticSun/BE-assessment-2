const RouteController = require('./RouteController')

class DetailRoute extends RouteController {
    constructor(params) {
        super(params)
        this.renderView(params.view, params.response)
    }
}

module.exports = DetailRoute