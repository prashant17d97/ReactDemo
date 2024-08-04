import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import WalkThrough from '../screens/WalkThrough';
import HomeScreen from '@/presentation/screens/HomeScreen';
import { Boarding } from '../screens/Boarding';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import ResetPassword from '../screens/ResetPassword';
import NewPassword from '../screens/NewPassword';
import OtpVerification from '../screens/OtpVerification';

const Stack = createNativeStackNavigator();

const Navigation = ({}) => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false, }} >
        <Stack.Screen name="WalkThrough" component={WalkThrough}/>
        <Stack.Screen name="Boarding" component={Boarding}/>
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="ResetPassword" component={ResetPassword}/>
        <Stack.Screen name="OtpVerification" component={OtpVerification}/>
        <Stack.Screen name="NewPassword" component={NewPassword}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
