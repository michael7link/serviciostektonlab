/*DAO*/
var dao = require('./../DAO/RolDAO')

/*model*/
//var model = require('./../Model/Rol')

/*controller*/
buscar = (req, res) => {
  var ok = (result) => {
      res.status(200).send(result)
  }
  var error = (error) => {
      res.status(400).send(error)
  }
  try {
    dao.buscar(req.params.id, ok, error)
  } catch (e) {
    console.log("buscar")
    console.log(e)
    res.status(500).send(e)
  }
}

listar = (req, res) => {
  var ok = (result) => {
      res.status(200).send(result)
  }
  var error = (error) => {
      res.status(400).send(error)
  }
  try {
    dao.listar(ok, error)
  } catch (e) {
    console.log("listar")
    console.log(e)
    res.status(500).send(e)
  }
}

insertar =  (req, res) => {
  var ok = (result) => {
      res.status(200).send(result)
  }
  var error = (error) => {
      res.status(400).send(error)
  }
  try {
    const usuario = {
      vcDescripcion: req.body.vcDescripcion,
      siEstado: 1
    }
    dao.insertar(usuario, ok, error)
  } catch (e) {
    console.log("insertar")
    console.log(e)
    res.status(500).send(e)
  }
}

modificar =  (req, res) => {
  var ok = (result) => {
      res.status(200).send(result)
  }
  var error = (error) => {
      res.status(400).send(error)
  }
  try {
    const usuario = {
      seIdRol: req.params.id,
      vcDescripcion: req.body.vcDescripcion,
      siEstado: req.body.siEstado
    }
    dao.modificar(usuario, ok, error)
  } catch (e) {
    console.log("modificar")
    console.log(e)
    res.status(500).send(e)
  }
}

eliminar =  (req, res) => {
  var ok = (result) => {
      res.status(200).send(result)
  }
  var error = (error) => {
      res.status(400).send(error)
  }
  try {
    dao.eliminar(req.params.id, ok, error)
  } catch (e) {
    console.log("eliminar")
    console.log(e)
    res.status(500).send(e)
  }
}

exports.buscar = buscar
exports.listar = listar
exports.insertar = insertar
exports.modificar = modificar
exports.eliminar = eliminar
