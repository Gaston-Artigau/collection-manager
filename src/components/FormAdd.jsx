import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { crearRegistro } from '../actions/nomina'

const FormAdd = () => {

  const dispatch = useDispatch()
  const [viewForm, setViewForm] = useState(false)

  const [cantidadPago, setCantidadPago] = useState(
    {
        pagoHora: 0,
        horas: 0
    }
  )

  const {pagoHora, horas} = cantidadPago

//   const [pagoHora, setPagoHora] = useState(0)
//   const [horas, setHoras] = useState(0)

  const handleAdd = () => {
    setViewForm(!viewForm)
    // dispatch(crearRegistro())
  }

  const handleChange = (e) => {
    setCantidadPago({
        ...cantidadPago,
        [e.target.name]: e.target.value
    })
  }

  const handleSave = () => {

    const cantidadFinal = horas * pagoHora

    dispatch(crearRegistro(cantidadFinal))

    setCantidadPago(
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
              
              <label htmlFor="icon_prefix1">Pago X hora: </label>
              <input id="icon_prefix1" type="text" placeholder="Ingresa pago x hora" value={pagoHora} onChange={handleChange} name="pagoHora"/><br/>

              <label htmlFor="icon_prefix2">Horas trabajadas: </label>
              <input id="icon_prefix2" type="text" placeholder="Ingresa cantidad de horas" value={horas} onChange={handleChange} name="horas"/>

              <button onClick={handleSave} className="btn purple">Calcular y Guardar</button>
            </div>
            )
        }
    </div>
  )
}

export default FormAdd