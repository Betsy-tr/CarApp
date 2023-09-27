import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './HomeScreen'
import CompanyScreen from './CompanyScreen';



const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Company" component={CompanyScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default Route