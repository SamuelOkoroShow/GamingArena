 
import React from 'react';
import { StyleSheet, Image, Text, View, Platform, UIManager, ListView, TouchableOpacity, LayoutAnimation } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../math/bit_map/colors'

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
// This need to have a constructor with unique moves for each character

export default class movesDash extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      dataSource: ds.cloneWithRows(this.props.unit.moves),
      expanded: false
    }
      // This is for android Animations
    if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental &&   UIManager.setLayoutAnimationEnabledExperimental(true);
}
  }

 movesList(data){
    return(<View style={{borderRadius:35, flexDirection:'row', backgroundColor:colors[0], margin:5, borderWidth:2, justifyContent:'space-between', borderColor:colors[1], width:270, height:70}}>
      <Image source={data.image} resizeMode="stretch" style={{width:60, margin:5, justifyContent:'center', borderWidth:2, borderColor:colors[1], height:60, borderRadius:30,}} />
      <View style={{justifyContent:'center', flex:4}}>
      <Text style={{fontSize:16, fontWeight:'200', margin:5, marginLeft:0, marginTop:15}}>{data.name.toUpperCase()}</Text>
      <ListView 
      dataSource = {ds.cloneWithRows(data.elements)}
      horizontal= {true}
      renderRow = {(data) => <Text style={{margin:5, marginTop:0, marginLeft:0, fontSize:10}}>{data}</Text>} />
      </View>
      <View style={{justifyContent:'center', flex:2}}>
      <Text style={{marginTop:20, marginRight:20, fontSize:9}}>{data.effect.handle}</Text>
      </View>
      </View>)
  }

  toggleExpand(){
    if(!this.state.expanded){
      this.setState({expanded:true})
    }else{
      this.setState({expanded:false})
    }
  }

  expandableList(){
    if(this.state.expanded){
    return(<ListView 
        dataSource = {this.state.dataSource}
        style = {{marginTop:100}}
        renderRow = {(data) => this.movesList(data)}
        />)}else{
          return(<View />)
        }
  }

  render(){
           LayoutAnimation.spring();
    return(<View><TouchableOpacity onPress={() => this.toggleExpand()} style={{right:0, alignSelf:'flex-end', width:40, borderWidth:2, borderColor:colors[1], justifyContent:'center', alignItems:'center', height:40, margin:5, borderRadius:20, backgroundColor:colors[0]}}>
    <Icon name = "code" size={10} style={{alignSelf:'center'}} color='#777' />
    </TouchableOpacity><View>
    {this.expandableList()}
    </View>
    </View>
    )
  }

}