import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flexDirection:"column", flex:1, backgroundColor:"black"}}>
        <ScrollView>
        <View style={{flexDirection:"column",backgroundColor:'#2D2121', borderBottomEndRadius:20, borderBottomStartRadius:20}}>
        <View style={{ flexDirection:"row", backgroundColor:'#2D2121', alignItems:"center"}}>
          <View style={{elevation:10, marginTop:30, marginStart:38, marginEnd:10, marginBottom:10}}><Image source={require('../../images/1.jpg')} style={styles.dp}></Image></View>
          <View style={{flexDirection:"column"}}>
            <Text style={{color:"white", fontFamily:"Montserrat-Bold", fontSize:18}}>Laura Walter</Text>
            <Text style={{color:"gray", fontFamily:"Montserrat-Regular", fontSize:16}}>@iamLaura</Text>
          </View>
        </View>
        <View style={{backgroundColor:'gray', height:1, marginTop:5, marginBottom:10, marginLeft:40, marginRight:40}}></View>
        <View style={{flexDirection:"row", alignItems:"center", marginBottom:10}}>

          <View style={{flex:0.34}}>
              <View style={{flexDirection:"column", alignItems:"center"}}>
                  <Text  style={{color:"white", fontFamily:"Montserrat-Bold", fontSize:18}}>50</Text>
                  <Text  style={{color:"gray", fontFamily:"Montserrat-Regular", fontSize:14}}>Posts</Text>

              </View>
          </View>

          <View style={{flex:0.34}}>
              <View style={{flexDirection:"column", alignItems:"center"}}>
                  <Text  style={{color:"white", fontFamily:"Montserrat-Bold", fontSize:18}}>1080</Text>
                  <Text  style={{color:"gray", fontFamily:"Montserrat-Regular", fontSize:14}}>Followers</Text>

              </View>
          </View>

          <View style={{flex:0.34}}>
              <View style={{flexDirection:"column", alignItems:"center"}}>
                  <Text  style={{color:"white", fontFamily:"Montserrat-Bold", fontSize:18}}>812</Text>
                  <Text  style={{color:"gray", fontFamily:"Montserrat-Regular", fontSize:14}}>Following</Text>

              </View>
          </View>
        </View>

        <View style={{flexDirection:"column", marginStart:40}}>
            <Text style={{color:"white", fontFamily:"Montserrat-Bold", fontSize:20, marginTop:16}}>About</Text>
            <Text style={{color:"gray", fontFamily:"Montserrat-Regular", fontSize:14, marginTop:10, marginRight:20, marginBottom:10}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</Text>
        </View>
        


        </View>

        <View style={{flexDirection:"column"}}>
        <Text style={{color:"white", fontFamily:"Montserrat-Bold", fontSize:20, marginTop:16, marginStart:50}}>Posts</Text>
          <View style={{flexDirection:"row", marginLeft:20, marginRight:20}}>
            <View  style={{elevation:10, flex:0.34,marginLeft:30, marginTop:30}}><Image source={require('../../images/1.jpg')} style={styles.dp}></Image></View>
            <View style={{flex:0.34,elevation:10, marginTop:30}}><Image source={require('../../images/2.jpg')} style={styles.dp}></Image></View>
            <View style={{flex:0.34,elevation:10, marginRight:30, marginTop:30}}><Image source={require('../../images/3.jpg')} style={styles.dp}></Image></View>
          </View>

          <View style={{flexDirection:"row",  marginLeft:20, marginRight:20}}>
            <View  style={{elevation:10, flex:0.34,marginLeft:30, marginTop:10}}><Image source={require('../../images/4.jpg')} style={styles.dp}></Image></View>
            <View style={{flex:0.34,elevation:10, marginTop:10}}><Image source={require('../../images/5.jpg')} style={styles.dp}></Image></View>
            <View style={{flex:0.34,elevation:10, marginRight:30, marginTop:10}}><Image source={require('../../images/x.jpg')} style={styles.dp}></Image></View>
          </View>

          <View style={{flexDirection:"row",  marginLeft:20, marginRight:20}}>
            <View  style={{elevation:10, flex:0.34,marginLeft:30, marginTop:10}}><Image source={require('../../images/y.jpg')} style={styles.dp}></Image></View>
            <View style={{flex:0.34,elevation:10, marginTop:10}}><Image source={require('../../images/z.jpg')} style={styles.dp}></Image></View>
            <View style={{flex:0.34,elevation:10, marginRight:30, marginTop:10}}><Image source={require('../../images/as.jpg')} style={styles.dp}></Image></View>
          </View>
        </View>

        
      <View>
      </View>
      </ScrollView>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  dp:{
    height:100, width:100,
    borderRadius:10,
    
  }
})
