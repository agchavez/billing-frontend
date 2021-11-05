import React from 'react';
import { Provider } from 'react-redux';
import './styles/style.scss';
import { AppRouter } from './Router/appRouter';
import { store } from './state/store';

function App() {
  return (
      <Provider store= {store}>
        <AppRouter/>
      </Provider>
  );
}

export default App;
