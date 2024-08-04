import React, { useState } from 'react';
import { ThemeProvider } from '../presentation/theme/ThemeContext'; 
import { ColorValue, SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import Navigation from '@/presentation/navigation/Navigation';

const App = () => {
  const [statusBarColor, setStatusBarColor] = useState<ColorValue | undefined>(undefined);
  const colorScheme = useColorScheme()
  return (
    <SafeAreaView style={{flex: 1}}>
  <StatusBar
      backgroundColor={statusBarColor}
      barStyle={'light-content'}
  />
  <ThemeProvider>
      <Navigation/>
    </ThemeProvider>
</SafeAreaView>
    
  );
};

export default App;
