

class Controller {
    assertNotNull(val) {
        if (val === null || val === undefined) {
            throw new Error(`RouteController: constructor param 'val' = ${val}`)
        } else {
            return false
        }
    }
}

module.exports = Controller