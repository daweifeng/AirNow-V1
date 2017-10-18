import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './component/app.js'
import airApp from './reducers/index';

const createStoreWithMiddleWare = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <AppContainer>
    <Provider store={createStoreWithMiddleWare(airApp)}>
      <App />
    </Provider>
  </AppContainer>,
  document.getElementById('app'),
);
if (module.hot) {
  module.hot.accept('./component/app.js', () => { 
    ReactDOM.render(
      <App />,
      document.getElementById('app')
    );
  });
}