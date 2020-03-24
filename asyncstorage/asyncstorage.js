import {AsyncStorage} from 'react-native';
import uuid from "uuid"

export async function getUserId() {
  let userId = await AsyncStorage.getItem('USER_ID');
  return userId
}

export async function setUserId(){
  let userId = uuid.v4()
  db.collection("userData").doc(userId).set({
    name:"ななし"
  })
  await AsyncStorage.setItem('USER_ID', userId);
  return userId
}
