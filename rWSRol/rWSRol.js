
/*imports*/
const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const cors = require('cors')

const port = process.env.PORT || 3041

/*controller*/
var controller = require('./Controller/RolController')

/*service*/
var app = express()

var router = express.Router()
router.get('/', function (req, res) {
    res.send('Servicios Rest - Rol')
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride())
app.use(router)

var api = express.Router()

api.route('/rol/:id').get(controller.buscar)
api.route('/rol').get(controller.listar)
api.route('/rol').post(controller.insertar)
api.route('/rol/:id').put(controller.modificar)
api.route('/rol/:id').delete(controller.eliminar)

app.use('/service', api)

app.listen(port, function () {
    console.log(`Servidor escuchando en puerto: ${port}`)
    console.log(`http://localhost:${port}/service/rol`)
})
