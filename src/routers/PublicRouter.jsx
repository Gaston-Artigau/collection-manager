import React from 'react'
import { Navigate } from 'react-router-dom'

const PublicRouter = ({log, children}) => {
  
  return log ? <Navigate to='/app'/> : children 

    // <Routes>
    //   <Route {...resto} component={
    //     (props) => log ? <Navigate to='/app'/> : <Component {...props}/>
    //   }/>
    // </Routes>
}

export default PublicRouter