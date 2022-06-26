import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { crearRegistro } from '../actions/nomina'

const FormAdd = () => {

  const dispatch = useDispatch()
  const [viewForm, setViewForm] = useState(false)

  const [cantidadPago, setCantidadPago] = useState(
    { //estado inicial
      pagoHora: null,
      horas: null
    }
  )

  const {pagoHora, horas} = cantidadPago // desestructuracion

  const handleAdd = () => {
    setViewForm(!viewForm) //se invierte el estado actual de viewForm
  }

  const handleChange = (e) => {
    setCantidadPago({
        ...cantidadPago,
        [e.target.name]: e.target.value //el nuevo valor que se le dé a pagoHoras o horas se le asignara automaticamente, ej: horas: 5
    })
  }

  const handleSave = () => {

    const cantidadFinal = horas * pagoHora

    dispatch(crearRegistro(cantidadFinal))  // se envia la data dentro de la funcion crearRegistro

    setCantidadPago( //se reinicia el estado luego de enviar la data (dispatch)
      {
        pagoHora: 0,
        horas: 0
      }
    )
  }

  return (
    <div><br/>
        <button onClick={handleAdd} className="btn green">
          {
            !viewForm ? 'Agregar' : 'Cerrar'
          }
        </button>

        {
          viewForm && (
          <div className="animate__animated animate__fadeIn">
            <br/>
            
            <label htmlFor="icon_prefix1">Pago X hora en $: </label>
            <input id="icon_prefix1" type="number" placeholder="Ingresa pago x hora" value={pagoHora} onChange={handleChange} name="pagoHora"/><br/>

            <label htmlFor="icon_prefix2">Horas trabajadas: </label>
            <input id="icon_prefix2" type="number" placeholder="Ingresa cantidad de horas" value={horas} onChange={handleChange} name="horas"/>

            <button onClick={handleSave} className="btn purple">Calcular y Guardar</button>
          </div>
          )
        }
    </div>
  )
}

export default FormAdd