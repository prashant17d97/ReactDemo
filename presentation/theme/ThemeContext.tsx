// ThemeContext.js or ThemeContext.tsx
import React, { createContext, useState, useContext, ReactNode} from 'react';
import { useColorScheme, StatusBar, ColorValue } from 'react-native';
import { lightTheme, darkTheme } from './Colors';

interface ThemeContextType {
  theme: typeof lightTheme | typeof darkTheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode, statusColor?:ColorValue }> = ({ children ,statusColor}) => {
  const systemTheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(systemTheme === 'dark');

  const theme = isDarkMode ? darkTheme : lightTheme;
  const statusBarColor = statusColor??theme.backgroundColor

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
       <StatusBar
        barStyle={theme.isDark ? 'light-content' : 'dark-content'}
        backgroundColor={statusBarColor}
      />
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};
