import { Navigate, Route, Routes} from 'react-router-dom'
import LoginScreen from '../pages/LoginScreen'
import RegisterScreen from '../pages/RegisterScreen'

const AuthRouter = () => {
  return (
    <Routes>
      <Route end path='/login' element={<LoginScreen/>}/>
      <Route end path='/register' element={<RegisterScreen/>}/>

      <Route path='/' element={<Navigate to='/auth/login'/>}/>
    </Routes>
  )
}

export default AuthRouter