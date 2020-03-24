import React,{ Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
} from 'react-native';

import {
  db
} from "../firebase/firebase"

import {
  getUserId
} from "../asyncstorage/asyncstorage"

import {
  dateFormat
} from "../methods/methods"

export default class HomeScreen extends Component{

  constructor(props){
    super(props)

    this.state = {
      answer:"",
      didAnswered:null, //回答済みかどうか
    }
  }

  componentDidMount(){

  }

  async sendAnswer(){
    if(this.state.answer=="")alert("1文字以上入力してください")

    let userId = await getUserId()
    let data = {
      answer:this.state.answer,
      userId:userId,
      created_at:new Date(),
    };

    let setDoc = db.collection("answers").add(data);
  }

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
          value={this.state.answer}
          onChangeText={(t) => this.setState({answer:t})}
        />
        <View style={{height:10}}/>
        <TouchableOpacity
          style={styles.sendButtonContainer}
          onPress={() => this.sendAnswer()}
        >
          <Text style={styles.sendButtonText}>回答する</Text>
        </TouchableOpacity>
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
  },
  sendButtonContainer:{
    height:50,
    width:200,
    backgroundColor:"lightblue",
    justifyContent:"center",
    alignItems:"center",
  },
  sendButtonText:{

  },
});
