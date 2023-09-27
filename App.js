import { StatusBar , StyleSheet, Text, View } from "react-native";
import React from "react";
import SPACING from './app/config/SPACING'
import colors from './app/config/colors'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from "./app/screens/HomeScreen";
import CompanyScreen from "./app/screens/CompanyScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    
      // <StatusBar barStyle="light-content"/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Company" component={CompanyScreen}/>
          <Stack.Screen name="Home" component={HomeScreen}/>
          
        </Stack.Navigator>
      </NavigationContainer>
    
  );
};

export default App;

const styles = StyleSheet.create({});
