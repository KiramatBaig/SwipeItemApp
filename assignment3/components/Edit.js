import * as React from 'react';
import { Text, View, StyleSheet, TextInput,Button,FlatList,TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

export default class Edit extends React.Component{
state={value: this.props.item.data}

handleValue=(value)=>{
  this.setState({value})
}
handleSubmit=()=>{
  this.props.editItem({id: this.props.item.id,data: this.state.value})
}
  render(){
  return(
    <View style={styles.container}>
    <View style={styles.addItem}>
    <Text style={{fontSize: 20,marginBottom: 20}}>Edit List Item</Text>
    <TextInput style={{borderWidth: 1.3, width: 350, height: 50,borderColor: "black",padding: 10,fontSize: 15,justifyContent: "center"}}value={this.state.value} onChangeText={this.handleValue} />
    <Button title="Update" onPress={()=>this.handleSubmit()}/>
    </View>
    </View>
  )
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