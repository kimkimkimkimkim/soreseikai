import React,{ Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

//navigation
import { NavigationContainer } from '@react-navigation/native';
import {
  createBottomTabNavigator
} from "@react-navigation/bottom-tabs"

//screens
import HomeScreen from "./screens/HomeScreen"
import FeedScreen from "./screens/FeedScreen"
import SettingScreen from "./screens/SettingScreen"

const Tab = createBottomTabNavigator()

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={label}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 ,height:30,justifyContent:"center",alignItems:"center"}}
          >
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function BottomTab(){
  return(
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Feed" component={FeedScreen}/>
      <Tab.Screen name="Setting" component={SettingScreen}/>
    </Tab.Navigator>
  )
}

export default class App extends Component{
  render(){
    return (
      <SafeAreaView style={{flex:1}}>
        <NavigationContainer>
          <BottomTab />
        </NavigationContainer>
      </SafeAreaView>
      
    );
  }
  
}