import { db } from "../firebase/config-firebase"
import { types } from "../types/types"

export const crearRegistro = (pago) => {
    return async (dispatch, getState) => {
        const {uid} = getState().auth

        const datos = {
            fecha: new Date().toLocaleDateString(),
            pago
        }

        const referencia = await db.collection(`${uid}/nominas/nomina`).add(datos)

        const id = await referencia.id

        const newData = {
            ... datos,
            id
        }

        dispatch(create(newData))
    }
}

export const readRegistros = (data) => {
    return {
        type: types.nominaRead,
        payload: data
    }
}

export const create = (data) => {
    return {
        type: types.nominaAdd,
        payload: data
    }
}

export const deleteRegistro = (id) => {
    return async (dispatch, getState) => {
        const {uid} = getState().auth

        await db.doc(`${uid}/nominas/nomina/${id}`).delete()

        dispatch(borrar(id))
    }
}

export const borrar = (id) => {
    return {
        type: types.nominaDelete,
        payload: id

    }
}

export const clean = () => {
    return {
        type: types.nominaClean
    }
}