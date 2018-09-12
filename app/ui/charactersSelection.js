import React from 'react';
import { StyleSheet, ListView, Text, View } from 'react-native';
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
      isCharacterAvy: false,
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

    console.log(data)
    return(<View><Text>data</Text></View>)

  }

  render() {
    return (
      <View style={styles.container}>
      <View style={{flex:4}} />
        <View style={{flex:1}}>
        <ListView
        contentContainerStyle = {{flexDirection: 'row',
        flexWrap: 'wrap'}}
        dataSource ={this.state.dataSource}
        renderRow = {(x) => this.eachCharacter(x)}
        />
        </View>
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
