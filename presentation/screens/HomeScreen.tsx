import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ColorValue } from 'react-native';
import { useThemeContext } from '../theme/ThemeContext';
import AppView from '../../components/AppView';
import PrimaryButton from '@/components/PrimaryButton';


export const HomeScreen = () => {
  const { theme, toggleTheme } = useThemeContext();

  if (!theme || !toggleTheme) {
    throw new Error('Theme context is not properly initialized');
  }
  return (
    <AppView>
      <View style={styles.main}>
        <Text style={[styles.title, { color: theme.textColor }]}>
          Hello World
        </Text>
        <Text style={[styles.subtitle, { color: theme.textColor }]}>
          This is the first page of your app.
        </Text>
        <PrimaryButton title="Toggle Theme" onPress={toggleTheme} />
      </View>
    </AppView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width:'100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
  },
});

export default HomeScreen;
