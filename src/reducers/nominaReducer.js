import { types } from "../types/types";

const initialState = {
    data: []
}

export const nominaReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.nominaAdd: //agrega la data
            return {
                ...state, 
                data: [...state.data, action.payload]
            }

        case types.nominaRead: //lee la data
            return {
                ...state,
                data: action.payload
            }

        case types.nominaDelete: //elimina la data
            return {
                ...state,
                data: state.data.filter((nomina) => {
                    return nomina.id !== action.payload
                })
            }

        case types.nominaClean: //limpia la data
            return {
                ...state,
                data: []
            }
    
        default:
            return state;
    }
}