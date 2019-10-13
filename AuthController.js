// import React, {Component} from 'react';
// import {Text, View, ToolbarAndroid, StyleSheet} from 'react-native';

// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
// import {createBottomTabNavigator} from 'react-navigation-tabs';

// import Ionicons from 'react-native-vector-icons/Ionicons';


// import MainScreen from './components/MainScreen';
// import Posts from './components/Posts';
// import ViewPost from './components/pages/ViewPost';

// import HomeScreen from './components/pages/HomeScreen';
// import SettingsScreen from './components/pages/SettingsScreen';
// import DetailsScreen from './components/pages/DetailsScreen';
// import ProfileScreen from './components/pages/ProfileScreen';
// import NewPost from './components/pages/NewPost';
// import Signup from './components/pages/Signup';
// import App from './App';
// const SettingsStack = createStackNavigator(
//   {
//     //Defination of Navigaton from setting screen
//     Settings: { screen: SettingsScreen },
//     Details: { screen: DetailsScreen },
//     Profile: { screen: ProfileScreen },
//   },
//   {
//     defaultNavigationOptions: {
//       //Header customization of the perticular Screen
//       headerStyle: {
//         backgroundColor: '#000000',
//       },
//       headerTintColor: '#FFFFFF',
//       title: 'Settings',
//       //Header title
//     },
//   }
// );



// const HomeStack = createStackNavigator(
//   {
//     //Defination of Navigaton from home screen
//     Login: {screen: Signup},
//     Home: { screen: MainScreen },
//     ViewPost: { screen: ViewPost },
    
//   },
//   {
//     defaultNavigationOptions: {
//       //Header customization of the perticular Screen
//       headerStyle: {
//         backgroundColor: '#42f44b',
//       },
//       headerTintColor: '#FFFFFF',
//       title: 'Home',
//       //Header title
//     },
//   }
// );

// // const AuthController = createBottomTabNavigator(
// //   {
// //     Home: { screen: HomeStack },
// //     // NewPost: { screen: NewPost },
// //     // Profile: {screen: ProfileScreen}
// //   },
// //   {
// //     defaultNavigationOptions: ({ navigation }) => ({
// //       tabBarIcon: ({ focused, horizontal, tintColor }) => {
// //         const { routeName } = navigation.state;
// //         let IconComponent = Ionicons;
// //         let iconName;
// //         if (routeName === 'Home') {
// //           iconName = `ios-information-circle${focused ? '' : '-outline'}`;
// //         } else if (routeName === 'NewPost') {
// //           iconName = `ios-add-circle${focused ? '' : '-outline'}`;
// //         }
// //         else if(routeName === 'Profile'){
// //           iconName = `ios-switch`;
// //         }
// //         return <IconComponent name={iconName} size={25} color={tintColor} />;
// //       },
// //     }),
// //     tabBarOptions: {
// //       style:{
// //         elevation: 5,
// //         backgroundColor: '#000000'
// //       },
// //       activeTintColor: '#a1887f',
// //       inactiveTintColor: 'gray',
// //     },
// //   }
// //);

// const MainNavigator = createStackNavigator({
//     Login: {screen: Signup},
//     Home: { screen: MainScreen },
//     ViewPost: { screen: ViewPost },

//    //header: <View></View>,
// });



// const styles = StyleSheet.create({
//   title: {
//     flex: 1,
//     elevation: 10,
//   },
// });





// export default createAppContainer(MainNavigator);

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase, { firestore } from 'react-native-firebase';
import App from './App';
import Signup from './components/pages/Signup';

export default class AuthController extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user: false
    };

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          const {navigate} = this.props.navigation;
          console.log('user is logged');
          console.log(user.email);
          navigate('Home')
          this.setState({
              user: true
          })
        }
        else{
            
        }
  });
  }

  render() {
      let view;
      if (this.state.user) view = <App/>
      else view = <Signup/>
    return (
      view
    );
  }
}
