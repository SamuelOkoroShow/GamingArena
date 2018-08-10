import React from 'react';
import { StyleSheet, Text, Image, View,  Navigator } from 'react-native';
import gameStudio from '../elements/images/placeholder1.png'
import ubisoft from '../elements/images/placeholder2.jpg'

var sponsores = {
      sponsore1 : {
      background: '#000',
      image: ubisoft
    },
      sponsore2:{
        background:'#eee',
        image: gameStudio

      }}
export default class Splash extends React.Component {
  constructor(){
    super()


    // This is only of the Splash state. State should be a global variable
    this.state = {
      sponsore : sponsores.sponsore1
    }
    
  }
sponsoreSwitch(){
  setTimeout(() => {this.declareSponsore()}, 3000)
}

declareSponsore(){
  this.setState({
    sponsore: sponsores.sponsore2
  })
}

//wait until the component is ready before starting that 3 second timer
componentDidMount(){
  this.sponsoreSwitch()
}

  render() {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:this.state.sponsore.background}}>
        <Image source = {this.state.sponsore.image} resizeMode ='contain' style={{width:170, height:170}} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
});
