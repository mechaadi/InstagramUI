import React, {Component} from 'react';

import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  View,
} from 'react-native';
import {Card} from 'react-native-elements';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Stories from './stories';
import Posts from './Posts';

class MainScreen extends Component {
  render() {
    const body =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    return (
      <View style={{flex: 1, backgroundColor: '#000'}}>
        <StatusBar backgroundColor="#2D2121" barStyle="light-content" />

        <SafeAreaView style={{backgroundColor: '#000'}}>
          <ScrollView style={{backgroundColor: '#000'}}>
            <View
              style={{
                borderBottomEndRadius: 10,
                borderBottomStartRadius: 10,
                padding: 10,
                backgroundColor: '#2D2121',
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 20,
                }}>
                <View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Icon
                      style={{padding: 10, marginRight: 25}}
                      name="camera"
                      color="white"
                      size={30}></Icon>
                  </View>
                </View>

                <Text style={{color: '#ffffff', fontSize: 25}}>A7A GRAM</Text>

                <View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Icon
                      style={{padding: 10}}
                      name="tv"
                      color="white"
                      size={25}></Icon>
                    <Icon
                      style={{padding: 10}}
                      name="send"
                      color="white"
                      size={25}></Icon>
                  </View>
                </View>
              </View>

              <View>
                <ScrollView horizontal={true}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Stories name="Ellie" image={require('../images/y.jpg')} />
                    <Stories name="Maria" image={require('../images/x.jpg')} />
                    <Stories name="Jennie" image={require('../images/z.jpg')} />
                    <Stories name="Clark" image={require('../images/1.jpg')} />
                    <Stories name="Ariana" image={require('../images/2.jpg')} />
                    <Stories name="Taylor" image={require('../images/3.jpg')} />
                    <Stories name="Clara" image={require('../images/4.jpg')} />
                    <Stories name="Hannah" image={require('../images/5.jpg')} />
                  </View>
                </ScrollView>
              </View>
            </View>

            <Posts
              author="Hannah Tyler"
              image={require('../images/y.jpg')}
              time="3 hours ago"
              body={body}
            />
            <Posts
              author="Clara"
              image={require('../images/1.jpg')}
              time="8 hours ago"
              body={body}
            />
            <Posts
              author="Ariana"
              image={require('../images/2.jpg')}
              time="12 hours ago"
              body={body}
            />
            <Posts
              author="Ellie"
              image={require('../images/3.jpg')}
              time="14 hours ago"
              body={body}
            />

            <View></View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  androidHeader: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: 'black',
      },
    }),
  },
  androidHeaderTitle: {
    ...Platform.select({
      android: {
        alignItems: 'flex-end',
      },
    }),
  },
});

export default MainScreen;
