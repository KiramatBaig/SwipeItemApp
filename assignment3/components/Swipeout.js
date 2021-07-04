import * as React from 'react';
import { Text, View, StyleSheet, TextInput,Button,FlatList,TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import Swipeout from 'react-native-swipeout'

function Swipelist(props){
  var swipeoutSettings={
  autoClose: true,
  right:[
    {
    text: "Delete",type: "delete", onPress: ()=> {props.remove(props.item.id)}
  }
  ],
  sectionId: 1
  
}
return(
  <Swipeout {...swipeoutSettings} style={{marginTop: 20}} >
        <View style={styles.item}>
        <TouchableOpacity onPress={()=>props.editScreen()}><Text style={styles.text}>{props.item.id}.{props.item.data}</Text></TouchableOpacity>
        </View>
        </Swipeout>
)
}

export default Swipelist;

const styles = StyleSheet.create({
  item: {
    padding: 10, 
    backgroundColor: "grey",
  },
  text: {
    fontSize: 20
  },
});