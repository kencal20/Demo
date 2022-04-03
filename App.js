import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bank from './src/Bank';
import Home from './src/Home'
import Studentloan from './src/Studentloan';
import Workersloan from './src/Workersloan';
import Pensionloan from './src/Pensionloan';
import Main from './src/components/Main'
import React from 'react';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer >

      <Stack.Navigator

      >
        <Stack.Screen name='Main' component={Main}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name='Home' component={Home}
          
        />
        <Stack.Screen name='Studentloan' component={Studentloan} 
        />
        <Stack.Screen name='Workersloan' component={Workersloan} 
        />
        <Stack.Screen name='Pensionloan' component={Pensionloan} 
        />
        <Stack.Screen name='Bank' component={Bank}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})