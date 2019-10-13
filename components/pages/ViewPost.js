import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import Video from 'react-native-video';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { throwStatement } from '@babel/types';


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
        paused: true,
        author: this.props.navigation.state.params.author,
        title: this.props.navigation.state.params.title,
        body: this.props.navigation.state.params.body,
        timestamp : this.props.navigation.state.params.timestamp,
        video : this.props.navigation.state.params.video,
        cou: 0
    };

    console.log(this.state.video)
  }


  openPopup(){
    console.log("ha");
    this.setState({paused : !this.state.paused})
  }

  render() {
    return (
      <View >
        <View>
        <Text> {this.state.author} </Text>
        <Text> {this.state.title} </Text>
        <Text> {this.state.body} </Text>
        <Text> {this.state.timestamp} </Text>

        <View >
        <TouchableOpacity style={{marginLeft:80}} onPress={this.openPopup.bind(this)}>
    <View>
      
    <Icon
              style={{padding: 8, marginRight: 5}}
              name= {!this.state.paused ? "pause" : "play"}
              color="black"
              size={20}></Icon>
    </View>
</TouchableOpacity>
        <Video source={{uri: this.state.video}}   // Can be a URL or a local file.
       ref={(ref) => {
         this.player = ref
       }} 
       paused={this.state.paused}                               // Store reference
       onBuffer={this.onBuffer}                // Callback when remote video is buffering
       onError={this.videoError}   
       style={styles.backgroundVideo}            // Callback when video cannot be loaded                                        // Callback when video cannot be loaded
       />
        </View>
       </View>
      </View>
    );
  }

  
}

var styles = StyleSheet.create({
  backgroundVideo: {
    marginLeft: 80,
    height:responsiveHeight(40),
    width: responsiveWidth(80),
  },
});
