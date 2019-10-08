import React, {Component} from 'react';
import {Text, View, ToolbarAndroid, StyleSheet} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainScreen from './components/MainScreen';
import Posts from './components/Posts';
import ViewPost from './components/pages/ViewPost';


const MainNavigator = createStackNavigator({
  Home: {screen: MainScreen},
  Posts: {screen: Posts},
  ViewPost : {screen: ViewPost }
  
});



const styles = StyleSheet.create({
  title: {
    flex: 1,
    elevation: 10,
  },
});




const App = createAppContainer(MainNavigator);

export default App;

