import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Routes from './router';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);


render(<App />, document.getElementById('index'));
