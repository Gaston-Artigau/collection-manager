import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteRegistro } from '../actions/nomina'

const Element = ({data}) => {

  const {fecha, pago, id} = data 

  const dispatch = useDispatch()

  let dateFormat

  if (fecha.seconds) {
    const date = fecha.toDate()
    dateFormat = date.toLocaleDateString() 
  }else {
    dateFormat = fecha
  }

  const handleDelete = () => {
    dispatch(deleteRegistro(id))
  }

  return (
    <>
        <td>{dateFormat}</td>
        <td>${pago}</td>
        <td>
            <button onClick={handleDelete} className="btn red">
              <i className="material-icons">delete_forever</i>
            </button>
        </td>
    </>
  )
}

export default Element