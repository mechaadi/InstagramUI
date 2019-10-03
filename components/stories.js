import React, { Component } from 'react';
import {
    Platform,
    StatusBar,
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    Image,
    View
  } from 'react-native';

class Stories extends Component {
  render() {
    return (
        <View style={{margin: 10, alignItems: 'center'}}>
        <Image
          style={{width: 70, height: 70, borderRadius: 50, borderColor: "#e91e63", borderWidth:2}}
          source={this.props.image}
        />
        <Text
          style={{
            color: 'white',
            justifyContent: 'center',
            margin: 2,
          }}>
          {this.props.name}
        </Text>

      </View>
    );
  }
}

export default Stories;
