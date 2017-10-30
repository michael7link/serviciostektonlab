/*helper*/
var helper = require('./../../Helper/helper')

/*DAO*/
buscar = (id, ok, error) => {
  var sqlQuery = {
      text: "SELECT seIdOrden, seIdCliente, dtFecha, tiHora, seIdEstadoOrden, seIdTipoPago, nmMontoTotal, siEstado FROM Orden WHERE seIdOrden=$1",
      parameters: [id]
  }

  helper.query(sqlQuery, ok, error)
}

listar = (ok, error) => {
  var sqlQuery = {
      text: "SELECT seIdOrden, seIdCliente, dtFecha, tiHora, seIdEstadoOrden, seIdTipoPago, nmMontoTotal, siEstado FROM Orden",
      parameters: []
  }

  helper.query(sqlQuery, ok, error)
}

insertar = (orden, ok, error) => {
  var sqlTransaction = {
      text: "INSERT INTO Orden(seIdCliente, dtFecha, tiHora, seIdEstadoOrden, seIdTipoPago, nmMontoTotal, siEstado) VALUES($1, $2)",
      parameters: [
        orden.seIdCliente,
        orden.dtFecha,
        orden.tiHora,
        orden.seIdEstadoOrden,
        orden.seIdTipoPago,
        orden.nmMontoTotal,
        orden.siEstado
    ]
  }
  helper.transaction(sqlTransaction, ok, error)
}

modificar = (orden, ok, error) => {
  var sqlTransaction = {
      text: "UPDATE Orden SET seIdOrden,=$1, seIdCliente,=$2, dtFecha,=$3, tiHora,=$4, seIdEstadoOrden,=$5, seIdTipoPago,=$6, nmMontoTotal,=$7, siEstado=$8 WHERE seIdOrden=$1",
      parameters: [
        orden.seIdOrden,
        orden.seIdCliente,
        orden.dtFecha,
        orden.tiHora,
        orden.seIdEstadoOrden,
        orden.seIdTipoPago,
        orden.nmMontoTotal,
        orden.siEstado
      ]
  }
  helper.transaction(sqlTransaction, ok, error)
}

eliminar = (id, ok, error) => {
  var sqlTransaction = {
      text: "UPDATE Orden SET siEstado=0 WHERE seIdRol=$1",
      parameters: [id]
  }
  helper.transaction(sqlTransaction, ok, error)
}

exports.buscar = buscar
exports.listar = listar
exports.insertar = insertar
exports.modificar = modificar
exports.eliminar = eliminar
