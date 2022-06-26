import { legacy_createStore as createStore} from 'redux'
import {applyMiddleware, combineReducers, compose} from 'redux'
import thunk from 'redux-thunk'
import { authReducer } from '../reducers/authReducer'
import { nominaReducer } from '../reducers/nominaReducer'

const reducers = combineReducers({ //se indican los reducers 
  auth: authReducer,
  nomina: nominaReducer
});

const composeEnhancers = //se configuran las devtools de redux
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore( //se crea el store de firebase
  reducers,
  composeEnhancers(applyMiddleware(thunk))
)