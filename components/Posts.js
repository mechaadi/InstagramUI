import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Video from 'react-native-video';

class Posts extends Component {
  static navigationOptions = {
    header: null
}

timeSince(timestamp) {
  var now = new Date(),
  timeStamp = timestamp.toDate(),
  secondsPast = (now.getTime() - timeStamp.getTime()) / 1000;

//    console.log(now);
  //  console.log(timeStamp)

  if(secondsPast < 60){
    return parseInt(secondsPast) + 's ago' ;
  }
  if(secondsPast < 3600){
    return parseInt(secondsPast/60) + 'm ago';
  }
  if(secondsPast <= 86400){
    return parseInt(secondsPast/3600) + 'h ago';
  }
  if(secondsPast > 86400){
      var day = timeStamp.getDate();
      var month = timeStamp.toDateString().match(/ [a-zA-Z]*/)[0].replace(" ","");
      var year = timeStamp.getFullYear() == now.getFullYear() ? "" :  " "+timeStamp.getFullYear();
      return day + " " + month + year;
  }

 
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
            {this.timeSince(this.props.time)}
          </Text>
        </View>

        {this.props.image === "" ? <Text style={{color:"white"}}></Text> :  <Image
          style={{
            borderRadius: 20,
            margin: 5,
            height: responsiveHeight(45), // 50% of screen height
            width: responsiveWidth(85), // 50% of screen width

            marginTop: 10,
          }}
          source={{uri: this.props.image}}></Image>}
       


{/* <Video source={{uri: this.props.video}}   // Can be a URL or a local file.
       ref={(ref) => {
         this.player = ref
       }} 
       paused={true}                                     // Store reference
       onBuffer={this.onBuffer}                // Callback when remote video is buffering
       onError={this.videoError}   
       style={styles.backgroundVideo}            // Callback when video cannot be loaded
       /> */}
 

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

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default Posts;
