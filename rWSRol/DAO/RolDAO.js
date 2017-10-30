/*helper*/
var helper = require('./../../Helper/helper')

/*DAO*/
buscar = (id, ok, error) => {
  var sqlQuery = {
      text: "SELECT seIdRol, vcDescripcion, siEstado FROM ROL WHERE seIdRol=$1",
      parameters: [id]
  }

  helper.query(sqlQuery, ok, error)
}

listar = (ok, error) => {
  var sqlQuery = {
      text: "SELECT seIdRol, vcDescripcion, siEstado FROM ROL",
      parameters: []
  }

  helper.query(sqlQuery, ok, error)
}

insertar = (rol, ok, error) => {
  var sqlTransaction = {
      text: "INSERT INTO ROL(vcDescripcion, siEstado) VALUES($1, $2)",
      parameters: [
        rol.vcDescripcion,
        rol.siEstado
      ]
  }
  helper.transaction(sqlTransaction, ok, error)
}

modificar = (rol, ok, error) => {
  var sqlTransaction = {
      text: "UPDATE ROL SET seIdROL=$2, siEstado=$3 WHERE seIdRol=$1",
      parameters: [
        rol.seIdRol,
        rol.vcDescripcion,
        rol.siEstado
      ]
  }
  helper.transaction(sqlTransaction, ok, error)
}

eliminar = (id, ok, error) => {
  var sqlTransaction = {
      text: "UPDATE ROL SET siEstado=0 WHERE seIdRol=$1",
      parameters: [id]
  }
  helper.transaction(sqlTransaction, ok, error)
}

exports.buscar = buscar
exports.listar = listar
exports.insertar = insertar
exports.modificar = modificar
exports.eliminar = eliminar
