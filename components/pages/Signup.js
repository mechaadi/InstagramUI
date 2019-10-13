import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, StatusBar, TextInput, TouchableOpacity, NativeModules } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import firebase, { firestore } from 'react-native-firebase';
import App from '../../App';


export default class Signup extends Component {
   
  constructor(props) {
    super(props);
    this.state = {
        email : '',
        password: '',
        user: false
    };

//     firebase.auth().onAuthStateChanged((user) => {
//         if (user) {
//           console.log('user is logged');
//           console.log(user.email);
//           this.setState({
//               user: true
//           })
//         }
//         else{
            
//         }
//   });
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log('user is logged');
          console.log(user.email);
          this.setState({
              user: true
          })
        }
        else{      
           

        }
  });
  }

  login(){
      console.log("AUth fun")
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((v)=>{
          console.log(v);
          this.setState({
            user: true
        })
      }).catch(c=>{
          console.log(c)
      })
  }

  render() {
      let view;
      if(this.state.user){
        view = <App/>
      }
      else{
          view = <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
          <StatusBar backgroundColor="#4c669f" barStyle="light-content" />
  
              <View style={{flex:1, flexDirection:"row", justifyContent:"center"}}>
                  <View style={{flex:1, flexDirection:"column"}}>
                  <View style={{flexDirection:"row", justifyContent:"center"}}>
                  <Text style={{marginTop:20, fontSize:60, fontFamily:"VINCHAND", color:"white"}}>A7A GRAM</Text>
                  </View>
                      <View style={{flexDirection:"row", justifyContent:"center"}}>
                      <Image source={require('../../images/logo.png')} style={{height:200, width:200, marginTop:20, marginBottom:20}} ></Image>
                      </View>
                      <TextInput onChangeText={(text) => this.setState({email: text})} placeholder="Enter Email" placeholderTextColor="white" style={styles.input}></TextInput>
                      <TextInput onChangeText={(text) => this.setState({password: text})} placeholder="Enter Password" placeholderTextColor="white" style={styles.input}></TextInput>
                      <View style={{flexDirection:"row"}}>
                          <Text style={{flex:0.6}}></Text>
                          <Text style={{flex:0.4, color:"white", fontFamily:"Montserrat-Regular"}}>Forgot password?</Text>
                      </View>
                      <TouchableOpacity onPress={()=>{ console.log("ho");this.login();}}>
                          <View style={styles.loginBut}>
                              <Text style={{color:"white", fontSize:20, fontFamily:"Montserrat-Regular"}}>LOGIN</Text>
                          </View>
                      </TouchableOpacity>
                      <View style={styles.bottomView}>
                          <View style={{flexDirection:"row", margin:10}}>
                              <Text style={{color:"white", fontFamily:"Montserrat-Regular"}}>Don't have an account?</Text>
                              <Text style={{color:"white", fontFamily:"Roboto-Regular"}}> Signup now</Text>
                          </View>
                      </View>
                  </View>
              </View>
          </LinearGradient>
      }
    return (
        view

      
    );
  }
}

var styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 0
    },
    buttonText: {
      fontSize: 18,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
    input: {
        padding: 10,
        margin: 10,
        fontSize: 18,
        borderWidth: 0,
        borderRadius: 100,
        borderColor: '#fff',
        backgroundColor: 'rgba(255,255,255,0.1)',
        fontFamily:"Montserrat-Regular"
    },
    loginBut: {
        elevation:20,
        borderRadius: 100,
        backgroundColor: "green",
        padding: 10,
        margin: 10,
        fontSize: 18,
        justifyContent:"center",
        alignItems:"center"
    },

    bottomView: {
        position: 'absolute',
        bottom:0
      }
  });
