import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, ColorValue, TextInput } from 'react-native';
import { useThemeContext } from '../theme/ThemeContext';
import AppView from '../../components/AppView';
import { ClickableBack } from '@/components/ClickableBack';
import Lock from '@/assets/svgs/Lock';
import AppIconButton from '@/components/AppIconButton';
import typography from '../theme/typography/Typography';
import PasswordInput from '@/components/PasswordInput';
import { useNavigation } from 'expo-router';


export const NewPassword = () => {
  const { theme, } = useThemeContext();
  const navigation = useNavigation();
  const screenNavigation = useNavigation() as { navigate: (routeName: string) => void };
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const inputRef = useRef<TextInput>(null);

  const handleOnSubmitEditing = () => {
    inputRef.current?.focus();  
    
  };
  const handleOnSubmitDone = () => {
    inputRef.current?.clear();  
  };
  const handleBackPressed = ()=>{
    navigation.goBack()
  }
  return (
    <AppView>
      <View style={styles.main}>
        <ClickableBack onClick={handleBackPressed}/>

        <View style={styles.textContainer}>
            <Text style={[typography.heading2, {textAlign:'center'}]}>New Password</Text>
            <Text style={[typography.body3, {textAlign:'center'}]}>Create your new password to Login</Text>
        </View>

        <View style={styles.buttonTextContainer}>

        <PasswordInput 
        inputRef={inputRef}
        leadingIcon={<Lock />} 
        value={password}
        onChangeText={(text: string) => setPassword(text)}
        placeholder="Enter Your Password"
        onSubmitEditing={handleOnSubmitEditing}
        />

        <PasswordInput 
        inputRef={inputRef}
        leadingIcon={<Lock />} 
        value={newPassword}
        onChangeText={(text: string) => setNewPassword(text)}
        placeholder="Re-Enter Your Password"
        onSubmitEditing={handleOnSubmitDone}
        />


        <AppIconButton
                  text="Reset Password"
                  iconSize={35}
                  backgroundColor={theme.primary}
                  height={48}
                  onClick={() => {
                    screenNavigation.navigate('HomeScreen')
                  } } icon={0}        />
         </View>
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
    gap:40,
  },
  buttonTextContainer: {
    flex: 1,
    width:'100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap:16,
  },
  textContainer:{
    width:'100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap:10,
  }
});

export default NewPassword;
