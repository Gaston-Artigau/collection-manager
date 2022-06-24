import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import AppScreen from '../pages/AppScreen'
import AuthRouter from './AuthRouter'
import {firebase} from '../firebase/config-firebase'
import PrivateRouter from './PrivateRouter'
import { login } from '../actions/auth'
import PublicRouter from './PublicRouter'
import { loadData } from '../helpers/loadData'
import { readRegistros } from '../actions/nomina'

const AppRouter = () => {

  const dispatch = useDispatch()

  const [log, setLog] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(
      async (user) => {
        if (user) {
          dispatch(login(user.uid, user.displayName))
          setLog(true)

          const nominaData =  await loadData(user.uid)
          
          dispatch(readRegistros(nominaData))
        }else {
          setLog(false)
        }
      }
    )
  }, [dispatch])

  return (
    <Router>
      <Routes>

        <Route
          path="/auth/*" 
          element={
            <PublicRouter log={log}>
              <AuthRouter/>
            </PublicRouter>
          }
        />

        <Route end 
          path="/app" 
          element={
            <PrivateRouter log={log}>
              <AppScreen/>
            </PrivateRouter>
          }
        />

        <Route path='/' element={<Navigate to='/auth/login'/>}/>

      </Routes>
    </Router>
  )
}

export default AppRouter