import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ViewPost extends Component {

    static navigationOptions = {
        title: 'READ MORE',
        headerStyle: {
          backgroundColor: '#2D2121',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };

  constructor(props) {
    super(props);

    this.state = {
        author: this.props.navigation.state.params.author,
        title: this.props.navigation.state.params.title,
        body: this.props.navigation.state.params.body,
        timestamp : this.props.navigation.state.params.timestamp,
    };
  }



  render() {
    return (
      <View>
        <Text> {this.state.author} </Text>
        <Text> {this.state.title} </Text>
        <Text> {this.state.body} </Text>
        <Text> {this.state.timestamp} </Text>

      </View>
    );
  }
}
