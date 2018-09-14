import React from 'react';
import { StyleSheet, ListView, Image, ImageBackground, TouchableOpacity, Text, View } from 'react-native';
import characters from '../math/data_map/characters'


//This could potentially contain a lot of state data and logic methodology
// We're going to try to keep this as clean as possible 

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
import el7 from "../elements/images/e7.png"

export default class CharacterSelection extends React.Component {
  // Do we want characters displayed in a listView? lets hace an indie view for now OK
  constructor(props){
    super(props)

    this.state = {
      characters: null,
      characterAvy: false,
      imageData: el7,
      name:'Hello World',
      dataSource : ds.cloneWithRows(characters)
    }
  }

  selectedChatacters(){
    // This returns an array
  }
  eachCharacter(data){

    return(<TouchableOpacity onPress = {() => this.setState({imageData: data.image})} style={{backgroundColor:'#d3d3d3', margin:5, borderRadius:5}}><Image source ={data.image} resizeMode="contain" style={{width:50, height:70}} /></TouchableOpacity>)
  }

  selectedChar(){
    if(this.state.imageData != null){
        return(<Image source={this.state.dataImage} resizeMode="stretch" style={{flex:1, width:null, height:null}} />)
      }else{
        return(<View />)
      }}


  render(){
    return(
    <View style={{flex:1}}>
      <View style={{flex:1, flexDirection:'row'}}>
      <View style={{flex:4}}>
      <ImageBackground source ={this.state.imageData} resizeMode="contain" style={{flex:1, width:null, height:null}}>
      <View style={{backgroundColor:'rgba(0,0,0,0.4)', width:100, padding:5}}>
      <Text style={{color:'#fff'}}>{this.state.name}</Text>
      </View>
      </ImageBackground>
      </View>
        <ListView
        dataSource ={this.state.dataSource}
        renderRow = {(x) => this.eachCharacter(x)}
        contentContainerStyle = {{flex:1, justifyContent:'center' }}
        style= {{flex:1}}
        />
        </View>
        </View>
        );
      }
}


