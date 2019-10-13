import React, {Component} from 'react';
import {View, Text, Button, TextInput, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {RNPhotoEditor} from 'react-native-photo-editor';
import Octicons from 'react-native-vector-icons/Octicons';
import { FloatingAction } from "react-native-floating-action";
import { TouchableHighlight } from 'react-native-gesture-handler';
import firebase, { firestore } from 'react-native-firebase';
import { func } from 'prop-types';


const options = {
  title: 'Select Image',
  // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const actions = [
    {
      text: "Accessibility",
      icon: require("../../images/1.jpg"),
      name: "bt_accessibility",
      position: 1
    },
   
  ];
  
export default class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caption: '',
      location: '',
      tags: ''
    };
  }

  writeToDB(){
      console.log("hey there")
    firebase.firestore().collection("dumy").add({
        title: "this is title",
        author: "Laura",
        image: "image_url",
        body: this.state.caption,
        timestamp: new Date()
        
    }).then(function(v){
        console.log("Added")
    }).catch(function(c){
        console.log(c);
    })
  }

  getImage() {
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log(response.path);
        RNPhotoEditor.Edit({
          path: response.path,
          // onDone: this.done(response),
        });
        this.setState({
          avatarSource: source,
        });
      }
    });
  }

  render() {
    let IconComponent = Octicons;
    return (
      <View style={{flex: 1, backgroundColor: '#000'}}>
        
        <Text
          style={{
            color: 'white',
            marginLeft: 20,
            marginRight: 20,
            marginTop: 10,
            marginBottom: 10,
          }}>
          WRITE SOMETHING NEW TODAY
        </Text>

        <TextInput
          style={{
            height: 140,
            borderColor: 'white',
            borderWidth: 1,
            borderRadius: 10,
            marginBottom: 10,
            padding: 10,
            margin: 10,
            color: 'white',
            textAlignVertical: 'top',
          }}
          placeholder="Start writing..."
          placeholderTextColor="grey"
          multiline={true}
          numberOfLines={10}
          onChangeText={text => this.setState({caption: text})}
          value={this.state.caption}
        />

        <View
          style={{
            backgroundColor: 'grey',
            marginLeft: 0,
            marginRight: 0,
            height: 1,
            marginTop: 20,
          }}></View>

        <Text
          style={{
            color: 'white',
            marginLeft: 20,
            marginRight: 20,
            marginTop: 10,
          }}>
          ADD TAGS
        </Text>

        <TextInput
          style={{
            height: 40,
            borderColor: 'white',
            borderWidth: 1,
            borderRadius: 5,
            marginBottom: 10,
            padding: 10,
            margin: 10,
            color: 'white',
            textAlignVertical: 'top',
          }}
          placeholder="#a7a #codey #google ... "
          placeholderTextColor="grey"
          multiline={true}
          numberOfLines={10}
          onChangeText={text => this.setState({tags: text})}
          value={this.state.tags}
        />

        <View
          style={{
            backgroundColor: 'grey',
            marginLeft: 0,
            marginRight: 0,
            height: 1,
            marginTop: 20,
          }}></View>

        <Text
          style={{
            color: 'white',
            marginLeft: 20,
            marginRight: 20,
            marginTop: 10,
          }}>
          ADD LOCATION
        </Text>

        <TextInput
          style={{
            height: 40,
            borderColor: 'white',
            borderWidth: 1,
            borderRadius: 5,
            marginBottom: 10,
            padding: 10,
            margin: 10,
            color: 'white',
            textAlignVertical: 'top',
          }}
          placeholder="Silicon valley, Berlin, New Delhi "
          placeholderTextColor="grey"
          multiline={true}
          numberOfLines={10}
          onChangeText={text => this.setState({location: text})}
          value={this.state.location}
        />

        <View
          style={{
            backgroundColor: 'grey',
            marginLeft: 0,
            marginRight: 0,
            height: 1,
            marginTop: 20,
          }}></View>
        <View style={{margin:10}}>
        <Text style={{marginLeft:10, marginTop:5, marginBottom:5, color:"white"}}>ADD IMAGE</Text>
        <View style={{flexDirection:"row"}}>
        <View style={{margin:10}}>
            <TouchableOpacity onPress={() => this.getImage()} underlayColor='#fff'>
                <View>
                <IconComponent name='file-media' size={60} color="grey" />

                </View>
            </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
            <TouchableOpacity onPress={() => this.getImage()} underlayColor='#fff'>
                <View>
                <IconComponent name='file-media' size={60} color="grey" />

                </View>
            </TouchableOpacity>
            </View>

      </View>
        
        </View>
  
 
        <View style={{marginLeft: 100, marginRight: 100, marginTop: 5}}>
          <Button onPress={() => this.writeToDB()} title="POST THIS ARTICLE"></Button>
        </View>
  
  </View>
     
     

      
    );
  }
}
