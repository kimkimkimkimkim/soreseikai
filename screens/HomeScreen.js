import React,{ Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default class HomeScreen extends Component{

  render(){
    return (
      <View style={styles.container}>
        {/* profile */}
        <View style={styles.profileContainer}>
          <Text>nanashi</Text>
          <View style={{flex:1}}/>
          <Text>!0 ?0</Text>
        </View>
        {/* status */}
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>回答期間</Text>
        </View>
        <View style={{height:10}}/>
        {/* main contents */}
        <View style={styles.themeContainer}>
          <Text style={styles.themeText}>「ざ」で始まるいい男の条件は？</Text>
        </View>
        <View style={{height:10}}/>
        <TextInput
          style={styles.textInputContainer}
        />
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:"center",
  },
  profileContainer:{
    height:30,
    width:"100%",
    //backgroundColor:"brown",
    flexDirection:"row",
    alignItems:"center",
    padding:5,
  },
  statusContainer:{
    height:40,
    width:"100%",
    backgroundColor:"brown",
    alignItems:"center",
    justifyContent:"center"
  },
  statusText:{
    fontSize:15,
    color:"white"
  },
  themeContainer:{
    width:"80%",
    height:150,
    padding:10,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"wheat",
    borderWidth:5,
    borderColor:"saddlebrown"
  },
  themeText:{
    fontSize:20
  },
  textInputContainer:{
    width:200,
    height:50,
    borderWidth:1,
    borderColor:"black",
    padding:5,
  }
});
