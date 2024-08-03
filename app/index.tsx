import React, { useState } from 'react';
import { ThemeProvider } from '../presentation/theme/ThemeContext'; 
import { ColorValue } from 'react-native';
import Navigation from '@/presentation/navigation/Navigation';

const App = () => {
  const [statusBarColor, setStatusBarColor] = useState<ColorValue | undefined>(undefined);

  return (
    <ThemeProvider statusColor={statusBarColor}>
      <Navigation
        onColorValue={setStatusBarColor} 
      />
    </ThemeProvider>
  );
};

export default App;
