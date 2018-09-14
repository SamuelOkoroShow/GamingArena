import React from 'react';
import { StyleSheet, ListView, Image, TouchableOpacity, Text, View } from 'react-native';
import characters from '../math/data_map/characters'


//This could potentially contain a lot of state data and logic methodology
// We're going to try to keep this as clean as possible 

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class CharacterSelection extends React.Component {
  // Do we want characters displayed in a listView? lets hace an indie view for now OK
  constructor(props){
    super(props)

    this.state = {
      characters: null,
      characterAvy: false,
      dataSource : ds.cloneWithRows(characters)
    }
  }
  eachCharacter(data){
    // Each of these needs its own properties. Can we select charater at 0 without queuing charater at 1?
    // Do we need to manipulate state for this?
    /*this.setState({
    * characters : {...this.state.characters}
    *})
    */


    // using ... functions is how we create the Shervil datachart btw

    return(<TouchableOpacity style={{backgroundColor:'#d3d3d3', margin:5, borderRadius:5}}><Image source={data.image} style={{width:60, height:60}} /></TouchableOpacity>)

  }

  selectionScreen(selection){
    if(!selection){
      return(<View style={{flex:1}}>
      <Text>Select Your C</Text>
      </View>)}else{}
  }

  render() {
    return(<View>
      <View style={{flex:1,backgroundColor: '#fff', flexDirection:'row'}}>
      <View style={{flex:4}}></View>
        <ListView
        contentContainerStyle = {{ flex:1, justifyContent:'center'}}
        dataSource ={this.state.dataSource}
        renderRow = {(x) => this.eachCharacter(x)}
        />
        </View>);
      }
}


