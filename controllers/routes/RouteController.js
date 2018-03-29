const Controller = require('../Controller')

class RouteController extends Controller {
    constructor(params) {
        super()
        this.assertNotNull(params.path)
        this.assertNotNull(params.view)
        this.assertNotNull(params.request)
        this.assertNotNull(params.response)
    }

    renderView(view, res) {
        return res.render(view)
    } 
}

module.exports = RouteController