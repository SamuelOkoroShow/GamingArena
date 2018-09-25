import React from 'react';
import rival1 from '../elements/images/rival1.jpg'
import rival2 from '../elements/images/rival2.jpg'
import rival3 from '../elements/images/rival3.jpg'
import back1 from "../elements/images/background1.jpg"
import colors from '../math/bit_map/colors'
import { StyleSheet, Image, Text, View, StatusBar, ImageBackground } from 'react-native';

import characters from '../math/data_map/characters'
import vehicles from '../math/data_map/vehicles'
import avatat from '../elements/cookies/avatar'

import tests from '../math/unitTest'


// # Unit Tests
var unit = [{
  id:0,
  dialog:"World"
}, {
  id:1,
  dialog:"I mean. I'm hello and this is my world. I am a replica's first thoughts"
}]

//This could potentially contain a lot of state data and logic methodology
// We're going to try to keep this as clean as possible 


export default class Rival extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {

    }
  }

  _opperative(a,b){
    var x = a * b
    return x
  }

  componentDidMount(){
    setTimeout(() => this._toBattle(), 1000)
  }
  
  _toBattle(){
    this.props.navigator.push({id:'battleview'});
  }

  render() {
    
    return (
      <ImageBackground source ={rival1} resizeMode = "stretch" style = {{flex:1, justifyContent:'center', alignItems:'center', height:null, width:null}}>
      <Text style={{position:'absolute', fontSize:11, left:5, bottom:5, color:'#fff'}}>{tests[0]()}{'\n'}{tests[2]()}{'\n'}{tests[3]()}{'\n'}{tests[4]()}{'\n'}{tests[5]()}</Text>
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
