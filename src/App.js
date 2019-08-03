import React, { Component } from 'react';
import { View } from 'react-native';
import RootRouter from './RootRouter';

export default class App extends Component {
  render() {
    return (
      <View style={{ display: 'flex', flex: 1 }}>
        <RootRouter />
      </View>
    );
  }
}
