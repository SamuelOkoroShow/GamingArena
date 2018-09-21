import React from 'react';
import rival1 from '../elements/images/rival1.jpg'
import rival2 from '../elements/images/rival2.jpg'
import rival3 from '../elements/images/rival3.jpg'
import { StyleSheet, Image, Text, View, StatusBar } from 'react-native';


//This could potentially contain a lot of state data and logic methodology
// We're going to try to keep this as clean as possible 

export default class Rival extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={rival1} resizeMode="cover" style={{flex:1, width:null, height:null}} />
        </View>
    );
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
