import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

class Posts extends Component {
  static navigationOptions = {
    header: null
}
  render() {

    return (
      <View style={{padding: 30}}>
       

       
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 50,
              height: 50,
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              style={{height: 40, width: 40, borderRadius: 50, margin: 8}}
              source={this.props.image}></Image>
            <Text style={{color: 'white', margin: 8}}>{this.props.author}</Text>
          </View>
          <Text style={{color: 'white', margin: 8, color: 'grey'}}>
            {this.props.time}
          </Text>
        </View>

        <Image
          style={{
            borderRadius: 20,
            margin: 5,
            height: responsiveHeight(45), // 50% of screen height
            width: responsiveWidth(85), // 50% of screen width

            marginTop: 10,
          }}
          source={this.props.image}></Image>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 50,
              height: 50,
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon
              style={{padding: 10, marginRight: 4}}
              name="heart"
              color="white"
              size={20}></Icon>
            <Text style={{color: 'white', marginRight: 20}}>1.2k</Text>

            <Icon
              style={{padding: 8, marginRight: 5}}
              name="comment"
              color="white"
              size={20}></Icon>

            <Text style={{color: 'white'}}>1.2k</Text>
          </View>
          <Icon
            style={{padding: 8, marginRight: 5}}
            name="bookmark"
            color="white"
            size={20}></Icon>
        </View>

        <Text
          style={{
            color: 'white',
            marginLeft: 10,
            marginBottom: 5,
            fontWeight: 'bold',
          }}>
          {this.props.author}
        </Text>
        <Text style={{color: 'white', marginLeft: 10, fontWeight: 'normal'}}>
          {this.props.body}
        </Text>
      </View>
    );
  }
}

export default Posts;
