import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components'

// Our Views/Components or whatever you want to call em

import BattleView from './battle'
import Splash from './splash'
import Rival from './rival'
import CharacterSelection from './charactersSelection'


// Usable routes
const routes = {
  splash: Splash,
  rival: Rival,
  characterSelection: CharacterSelection,
  battle: BattleView
};


// This is our arc view as well as our Navigation unit
// Dear React Native at facebook. Please stop screwing with our Navigation systems.


export default class NavigationAi extends React.Component {
  constructor(){
    super()
  }

  // define scene
  renderScene({id}, navigator){
    const Scene = routes[id]
    return <Scene {...this.props} hideMenu={() => this.hideMenu()} pushToCache = {this.pushToCash} navigator={navigator}/>
  }


  render() {
    return (
      <Navigator
              style={{flex: 1}}
              ref={'NAV'}
              initialRoute={{id:'battle', name:'battle'}}
              renderScene={this.renderScene.bind(this)}
            /> 
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
