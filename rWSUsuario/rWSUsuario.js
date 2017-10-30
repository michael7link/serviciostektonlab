
/*imports*/
const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const cors = require('cors')

const port = process.env.PORT || 3040

/*controller*/
var controller = require('./Controller/UsuarioController')

/*service*/
var app = express()

var router = express.Router()
router.get('/', function (req, res) {
    res.send('Servicios Rest - Usuario')
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride())
app.use(router)

var api = express.Router()

api.route('/usuario/:id').get(controller.buscar)
api.route('/usuario').get(controller.listar)
api.route('/usuario').post(controller.insertar)
api.route('/usuario/:id').put(controller.modificar)
api.route('/usuario/:id').delete(controller.eliminar)

api.route('/usuario/validar').post(controller.validar)

app.use('/service', api)

app.listen(port, function () {
    console.log(`Servidor escuchando en puerto: ${port}`)
    console.log(`http://localhost:${port}/service/usuario`)
})
