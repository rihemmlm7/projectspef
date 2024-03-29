import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import Login from './screens/auth/Login';
import Splash from './screens/Splash';

export default function App() {
  const Stack = createNativeStackNavigator();

  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
        <Stack.Screen name="Splash" options={{ headerShown: false }} component={Splash} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
