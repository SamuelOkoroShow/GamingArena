import React from 'react';
import { StyleSheet, StatusBar, Text, View, } from 'react-native';
import Navigator from './navigationAi'


export default class Arc extends React.Component {
  render(){
    return (<View style={{flex:1}}> <StatusBar hidden={false} /><Navigator /></View>);
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
