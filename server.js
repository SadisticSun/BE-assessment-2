// Main dependencies
const express       = require('express')
const app           = express()
const compression   = require('compression')
const helmet        = require('helmet')
const multer        = require('multer')
const bodyParser    = require('body-parser')

// Route Modules
const IndexRoute    = require('./controllers/routes/IndexRoute')
const DetailRoute   = require('./controllers/routes/DetailRoute')

// App config
app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(helmet())
app.use(compression())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('public'))
app.listen(8080)

app.get('/', (req, res) => new IndexRoute({
    path: '/',
    view: 'index', 
    request: req, 
    response: res
}))

app.get('/:id', (req, res) => new DetailRoute({
    path: '/',
    view: 'detail', 
    request: req, 
    response: res
}))