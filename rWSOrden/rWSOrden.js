
/*imports*/
const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const cors = require('cors')

const port = process.env.PORT || 3042

/*controller*/
var controller = require('./Controller/OrdenController')

/*service*/
var app = express()

var router = express.Router()
router.get('/', function (req, res) {
    res.send('Servicios Rest - Orden')
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride())
app.use(router)

var api = express.Router()

api.route('/orden/:id').get(controller.buscar)
api.route('/orden').get(controller.listar)
api.route('/orden').post(controller.insertar)
api.route('/orden/:id').put(controller.modificar)
api.route('/orden/:id').delete(controller.eliminar)

app.use('/service', api)

app.listen(port, function () {
    console.log(`Servidor escuchando en puerto: ${port}`)
    console.log(`http://localhost:${port}/service/orden`)
})
