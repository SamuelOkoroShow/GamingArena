import React from 'react';
import rival1 from '../elements/images/rival1.jpg'
import rival2 from '../elements/images/rival2.jpg'
import rival3 from '../elements/images/rival3.jpg'
import back1 from "../elements/images/background1.jpg"
import colors from '../math/bit_map/colors'
import { StyleSheet, Image, Text, View, StatusBar, ImageBackground } from 'react-native';


//Link to firebase

//This could potentially contain a lot of state data and logic methodology
// We're going to try to keep this as clean as possible 

export default class Rival extends React.Component {
  constructor(){
    super()
    this.state = {

    }
  }
  render() {
    return (<ImageBackground source ={rival3} resizeMode = "stretch" style = {{flex:1, height:null, width:null}}>
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
