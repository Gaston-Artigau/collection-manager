import { types } from "../types/types"
import {firebase, googleAuthProvider} from '../firebase/config-firebase'
 
//funciones que se utilizan la app 

export const googleLogin = () => { //funcion de firebase para conectar con cuenta de google 
    return (dispatch) => {
        firebase.auth()
        .signInWithPopup(googleAuthProvider)
        .then(({user}) => {
            // console.log(user.displayName)
            dispatch(login(user.uid, user.displayName))
        })
    }
}

export const emailAndPasswordLogin = (email, password) => { //funcion de firebase para conectar con email y password
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(({user}) => {
            // console.log(user)
            dispatch(login(user.uid, user.displayName))
        })
    }
}


export const register = (email, password, username) => { //funcion de firebase para crear usuario con email y password, se utilizan await porque devuelve una promesa, igual que en otros casos
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( async ({user}) => {
            await user.updateProfile({displayName: username})

            // console.log(user)
            dispatch(login(user.uid, user.displayName))
        })
    }
}

export const login = (uid, displayName) => { //accion final del logueo, envia los datos con el payload
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

export const logout = () => { // funcion de firebase para accion de logout
    return async (dispatch) => {
        await firebase.auth().signOut()

        dispatch({
            type: types.logout
        })
    }
}