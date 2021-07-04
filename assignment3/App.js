import * as React from 'react';
import { Text, View, StyleSheet, TextInput,Button,FlatList,TouchableOpacity,Alert} from 'react-native';
import Constants from 'expo-constants';
import Swipeout from 'react-native-swipeout'
import Edit from "./components/Edit"
import Swipelist from "./components/Swipeout"


let id=1;

export default class App extends React.Component {

state={list: [{id: 1,data: "Good"}],value: "",toggle: false,index: 0}


handleValue=(value)=>{
  this.setState({value})
}
add(){
  id++
  this.setState((prevState)=>({list: [...prevState.list,{id:id,data: this.state.value}]}))
}
delete(id){
  this.setState({list: this.state.list.filter(item=>item.id!==id)})
}
editScreen(index){
  this.setState({index: index,toggle: !this.state.toggle})
}
update(){
  this.setState({toggle: !this.state.toggle})
}
editItem=(obj)=>{
  this.setState({list: this.state.list.map(item=>{
    if(obj.id===item.id)
    return {id: item.id,data: obj.data}
    else 
    return item
  }),toggle: !this.state.toggle})
}
reset(){
   Alert.alert(
      "Delete List",
      "Are you sure?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => this.setState({list: []}) }
      ])
  
}

  render(){
    if(this.state.toggle){
    return(<Edit   update={()=>this.update()} item={this.state.list[this.state.index]} editItem={this.editItem}/>)
    }
  return (
    <View style={styles.container}>
    <View style={styles.addItem}>
    <TextInput style={{borderWidth: 1.3, width: 300, height: 50,borderColor: "black",padding: 10,fontSize: 15}} onChangeText={this.handleValue}/>
    <Button title="Add Item" onPress={()=>this.add()}/>
    </View>
    <FlatList
    data={this.state.list}
    renderItem={({item,index})=>{
      return(
      <Swipelist item={item}  remove={()=>this.delete(item.id)} editScreen={()=>this.editScreen(index)}/> 
      )
    }}
    />
    <Button title="Reset" onPress={()=>this.reset()}/>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  addItem:{
       alignItems: 'center',
  }
});
