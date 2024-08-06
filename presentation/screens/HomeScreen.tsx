// components/HomeScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, BackHandler } from 'react-native';
import { useThemeContext } from '../theme/ThemeContext';
import AppView from '../../components/AppView';
import PrimaryButton from '@/components/PrimaryButton';
import useBackHandler from '@/components/useBackHandler';
import { HomeScreenProps } from './HomeScreen.types';
import { getKey, saveKey } from '@/storage/SecureStorage';
import DynamicTextField from '@/components/DynamicTextField';


const HomeScreen = ({ }: HomeScreenProps) => {
  const { theme, toggleTheme } = useThemeContext();
  const [textString, setTextString] = useState("");
  const handleBackPress = useBackHandler();

  if (!theme || !toggleTheme) {
    throw new Error('Theme context is not properly initialized');
  }

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      backHandler.remove();
    };
  }, [handleBackPress]);

  useEffect(() => {
    const fetchTheme = async () => {
      const value = await getKey('HomeScreenText');
      if (value !== null) {
        setTextString(value);
      }
    };

    fetchTheme();
  }, [textString]);

  return (
    <AppView>
      <View style={styles.main}>
        <Text style={[styles.title, { color: theme.textColor }]}>
          Hello World
        </Text>
        <Text style={[styles.subtitle, { color: theme.textColor }]}>
          This is the first page of your app.
        </Text>

        <DynamicTextField
         value={textString} onChangeText={function (text: string): void {
         setTextString(text)
         saveKey('HomeScreenText',text)
        } }></DynamicTextField>

        <PrimaryButton title="Toggle Theme" onPress={toggleTheme} />
      </View>
    </AppView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
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