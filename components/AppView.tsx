import React, { ReactNode } from 'react';
import { ColorValue, StatusBar, View } from 'react-native';
import { useThemeContext } from '../presentation/theme/ThemeContext'; // Adjust path as needed
import { StyleSheet } from 'react-native';

interface AppViewProps {
  children: ReactNode;
  color?: ColorValue; // Import ColorValue from 'react-native'
}

const AppView: React.FC<AppViewProps> = ({ children, color }) => {
  const { theme } = useThemeContext(); // Replace with your actual theme context

  // Use the provided color if it's not null; otherwise, use theme.primary
  const backgroundColor = color ?? theme.backgroundColor;

  return (
    <View
      style={[ styles.container,{ backgroundColor, },]} >
    
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 16,
  },
});

export default AppView;
