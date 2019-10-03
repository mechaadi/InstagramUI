import React, {Component} from 'react';
import {Text, View, ToolbarAndroid, StyleSheet} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainScreen from './components/MainScreen';

const styles = StyleSheet.create({
  title: {
    flex: 1,
    elevation:10,
  }
});

export default class App extends Component {
  render() {
    return (
      <MainScreen/>
    );
  }
  
}

// const AppStackNavigator = createStackNavigator({
//   Main: {
//     screen: MainScreen
//   }
// })

// export default createAppContainer(AppStackNavigator)


