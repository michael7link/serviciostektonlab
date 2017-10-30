/*helper*/
var helper = require('./../../Helper/helper')

/*DAO*/
buscar = (id, ok, error) => {
  var sqlQuery = {
      text: "SELECT seIdUsuario, vcUsuario, vcPassword, seIdEmpleado, seIdROL, siEstado FROM USUARIO WHERE seIdUsuario=$1",
      parameters: [id]
  }

  helper.query(sqlQuery, ok, error)
}

listar = (ok, error) => {
  var sqlQuery = {
      text: "SELECT seIdUsuario, vcUsuario, vcPassword, seIdEmpleado, seIdROL, siEstado FROM USUARIO",
      parameters: []
  }

  helper.query(sqlQuery, ok, error)
}

insertar = (usuario, ok, error) => {
  var sqlTransaction = {
      text: "INSERT INTO USUARIO(vcUsuario, vcPassword, seIdEmpleado, seIdROL, siEstado) VALUES($1, $2, $3, $4, $5)",
      parameters: [
        usuario.vcUsuario,
        usuario.vcPassword,
        usuario.seIdEmpleado,
        usuario.seIdROL,
        usuario.siEstado
      ]
  }
  helper.transaction(sqlTransaction, ok, error)
}

modificar = (usuario, ok, error) => {
  var sqlTransaction = {
      text: "UPDATE USUARIO SET seIdROL=$2, siEstado=$3 WHERE seIdUsuario=$1",
      parameters: [
        usuario.seIdUsuario,
        //usuario.vcUsuario,
        //usuario.vcPassword,
        //usuario.seIdEmpleado,
        usuario.seIdROL,
        usuario.siEstado
      ]
  }
  helper.transaction(sqlTransaction, ok, error)
}

eliminar = (id, ok, error) => {
  var sqlTransaction = {
      text: "UPDATE USUARIO SET siEstado=0 WHERE seIdUsuario=$1",
      parameters: [id]
  }
  helper.transaction(sqlTransaction, ok, error)
}

validar = (usuario, ok, error) => {
  var sqlQuery = {
      text: "SELECT seIdUsuario, vcUsuario, seIdEmpleado, seIdROL, siEstado FROM USUARIO WHERE vcUsuario=$1 AND vcPassword=$2",
      parameters: [
        usuario.vcUsuario,
        usuario.vcPassword
      ]
  }

  helper.query(sqlQuery, ok, error)
}

exports.buscar = buscar
exports.listar = listar
exports.insertar = insertar
exports.modificar = modificar
exports.eliminar = eliminar

exports.validar = validar
