import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRouter = ({log, children}) => {

  return log ? children : <Navigate to='/auth/login'/> 


    // <Routes>
    //     <Route {...resto} component={
    //         (props) => log ? <Component {...props}/> : <Navigate to='/auth/login'/>
    //     }/>
    // </Routes>
}

export default PrivateRouter