import React from 'react'
import {useDispatch} from 'react-redux'
import {logout} from '../actions/auth'
import { clean } from '../actions/nomina'

const Navbar = () => {

    const dispatch = useDispatch()

    const handleLogout = () => { //se limpia el store y se desloguea
        dispatch(clean())
        dispatch(logout())
    }

  return (
    <nav className="green">
        <div className="nav-wrapper animate__animated animate__flipInX nav-content">
            <span className="" style={{paddingLeft: '15px', fontSize: '25px'}}>Calculadora Nominal</span>
            <ul id="nav-mobile" className="right">
                <li><button onClick={handleLogout} className="btn red waves-effect waves-light" style={{marginRight: '10px'}}>Logout</button></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar