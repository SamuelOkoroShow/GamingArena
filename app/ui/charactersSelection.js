import React from 'react';
import { StyleSheet, ListView, Image, ImageBackground, TouchableOpacity, Text, View } from 'react-native';
import characters from '../math/data_map/characters'
import Icon from 'react-native-vector-icons/FontAwesome';


//This could potentially contain a lot of state data and logic methodology
// We're going to try to keep this as clean as possible 

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
var colors = ["#FAD87D", "#43464C", "#184C39", "#AED1C4"]
import el7 from "../elements/images/e7.png"
var blurb_count = 0;
var blurbs = ['info1', 'info2', 'info3'];
character = {
  moves:[move1, move2, move3]
}

export default class CharacterSelection extends React.Component {
  // Do we want characters displayed in a listView? lets hace an indie view for now OK
  constructor(props){
    super(props)

    this.state = {
      isCharacters: false,
      blurb_count: blurb_count, 
      activeUnit: characters[0],
      dataSource : ds.cloneWithRows(characters)
    }

  }

  selectedChatacters(){
    // This returns an array
  }
  eachCharacter(data){
    return(<TouchableOpacity onPress = {() => this.setState({activeUnit: data, isCharacter: true})} style={{backgroundColor:'#d3d3d3', margin:5, borderRadius:5}}><Image source ={data.image} resizeMode="contain" style={{width:50, height:70}} /></TouchableOpacity>)
  }


  queueMoves(){
    return(<TouchableOpacity style={{borderRadius:20, width:40, height:40}}></TouchableOpacity>)
  }

  _nextBlurb(){
    //I want to be able to cycle this. Since we know each character has 3 blurbs, we'll only need to add a blurb_count at 3 = 0 
    blurb_count = blurb_count+1
    if(blurb_count == 3){
      blurb_count = 0
    }
    this.setState({
      blurb_count: blurb_count
    })
  }

  movesList(){
    return(<TouchableOpacity style={{borderRadius:25, width:50, height:50}}>
      <Image source={move1} resizeMode="stretch" style={{flex:1, width:null, height:null}} />
      </TouchableOpacity>)
  }

  expandibleMovesListButton(){
    return(<TouchableOpacity style={{width:70, height:70, borderRadius:35, backgroundColor:''}}></TouchableOpacity>)
  }

  selectedChar(){
    if(this.state.activeUnit.image != null){
        return(<Image source={this.state.dataImage} resizeMode="stretch" style={{flex:1, width:null, height:null}} />)
      }else{
        return(<View />)
      }}

      moreJokes(){
        return(<TouchableOpacity onPress={() => this._nextBlurb()} style={{ position:'absolute', right:10, bottom:5, width:40, height:40, justifyContent:'center', alignItems:'center'}}>
      <Icon name = 'angle-double-right'  size = {27} color ="#333" />
       </TouchableOpacity>)
      }

  render(){
    return(
    <View style={{flex:1}}>
      <View style={{flex:1, flexDirection:'row'}}>
      <View style={{flex:4}}>
      <ImageBackground source ={this.state.activeUnit.image} resizeMode="contain" style={{flex:1, width:null, height:null}}>
      <View style={{backgroundColor:'rgba(0,0,0,0.6)', marginTop:100, width:50, marginLeft:5, padding:5}}>
      <Text style={{color:'#fff', fontSize:7, fontWeight:'600'}}>{this.state.activeUnit.first_name.toUpperCase()}</Text>
      </View>
      <View style={{position:'absolute', bottom:0, padding:10, margin:5, backgroundColor:'rgba(0,0,0,0.6)', alignSelf:'center'}}>
      <Text style={{color:'#fff'}}>{this.state.activeUnit.background.info1}</Text>
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
        {this.moreJokes()}
        {this.queueMoves()}
        </View>
        );
      }
}


