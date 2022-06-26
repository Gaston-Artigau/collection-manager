import React from 'react';
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter';
import { store } from './store/store';

function App() {
  return ( //el store de firebase esta disponible en toda la app
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  );
}

export default App;
