import React from 'react';
import rival1 from '../elements/images/rival1.jpg'
import rival2 from '../elements/images/rival2.jpg'
import rival3 from '../elements/images/rival3.jpg'
import back1 from "../elements/images/background1.jpg"
import colors from '../math/bit_map/colors'
import { StyleSheet, Image, Text, View, StatusBar, ImageBackground } from 'react-native';


//Link to firebase
//Firebase
import * as firebase from 'firebase';
import fireConfig from '../auth'

// Initialize Firebase
const firebaseConfig = {
  apiKey: fireConfig.apiKey,
  authDomain: fireConfig.authDomain,
  databaseURL: fireConfig.databaseURL,
  storageBucket: fireConfig.storageBucket,
};

// # Unit Tests
var unit = [{
  id:0,
  dialog:"World"
}, {
  id:1,
  dialog:"I mean. I'm hello and this is my world. I am a replica's first thoughts"
}]
const firebaseApp = firebase.initializeApp(firebaseConfig);

//This could potentially contain a lot of state data and logic methodology
// We're going to try to keep this as clean as possible 


export default class Rival extends React.Component {
  constructor(props){
    super(props)
    console.log("Hello " + unit[0].dialog)
    
    this.state = {

    }
  }

  _opperative(a,b){
    var x = a * b
    return x
  }

writeUserData() {
  firebase.database().ref('pending_challenge/').push({
    usernameX: "Hawaiian",
    profile_picture : "High"
  });
}

  render() {
    this.writeUserData()
    return (
      <ImageBackground source ={rival1} resizeMode = "stretch" style = {{flex:1, height:null, width:null}}>
      
      </ImageBackground>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
