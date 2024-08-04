import React, { ReactNode } from 'react';
import { ColorValue, StatusBar, View } from 'react-native';
import { useThemeContext } from '../presentation/theme/ThemeContext'; // Adjust path as needed
import { StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

interface AppViewProps {
  children: ReactNode;
}

const AppView: React.FC<AppViewProps> = ({ children }) => {
  const { theme } = useThemeContext(); // Replace with your actual theme context
  const route = useRoute();

  const getBackgroundColorBasedOnRoute = () => {
    const color = route.name==='WalkThrough' ? theme.primary: theme.backgroundColor;
    return color
  };

  return (
    <View
      style={[ styles.container,{ backgroundColor : getBackgroundColorBasedOnRoute() }]} >
     <StatusBar
        barStyle={theme.isDark ? 'light-content' : 'dark-content'}
        backgroundColor={getBackgroundColorBasedOnRoute()}
      />
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
