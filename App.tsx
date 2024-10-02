import 'react-native-gesture-handler';
import Router from './src/navigation/Router';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
