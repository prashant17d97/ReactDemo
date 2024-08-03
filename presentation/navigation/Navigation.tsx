import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import OnBoarding from '../screens/Onboarding';
import HomeScreen from '@/presentation/screens/HomeScreen';
import { ColorValue } from 'react-native';

const Stack = createNativeStackNavigator();

interface NavigationProps {
    onColorValue: (color: ColorValue | undefined) => void
  }

const Navigation:React.FC<NavigationProps> = ({onColorValue}) => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false, }} >
        <Stack.Screen name="OnBoarding">
          {props => <OnBoarding {...props} onColorValue={onColorValue} />}
        </Stack.Screen>
        
        <Stack.Screen name="HomeScreen">
          {props => <HomeScreen {...props} onColorValue={onColorValue} />}
        </Stack.Screen>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
