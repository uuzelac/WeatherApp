import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import RootRouter from './RootRouter';
import store from './store';
import Spinner from './components/spinner/Spinner';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ display: 'flex', flex: 1 }}>
          <Spinner />
          <RootRouter />
        </View>
      </Provider>
    );
  }
}
