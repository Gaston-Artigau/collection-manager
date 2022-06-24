import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import FormAdd from '../components/FormAdd'
import Element from '../components/Element'

const AppScreen = () => {

  const name = useSelector( state => state.auth.displayName)
  
  const data = useSelector( state => state.nomina.data)

  return (
    <>
      <Navbar/>

      <div className="container animate__animated animate__jackInTheBox">
        <h1 className="center">Hola <b><i>{name}</i></b></h1>
        <hr/>

        <h6>Aqui tienes tus ingresos, sigue agregando o eliminando lo que desees.</h6>

        <FormAdd />

        <table>
          <thead>
            <tr>
                <th>Fecha</th>
                <th>Cobro</th>
                <th>Eliminar</th>
            </tr>
          </thead>

          <tbody>
            {
              data.map((element) => {
                return <tr className="animate__animated animate__fadeInUp" key={element.id}>
                  <Element data={element}/>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AppScreen