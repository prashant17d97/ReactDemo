import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ColorValue } from 'react-native';
import { useThemeContext } from '../theme/ThemeContext';
import AppView from '../../components/AppView';
import { ClickableBack } from '@/components/ClickableBack';
import DynamicTextField, { ImeActionType, KeyboardType, TextFieldType } from '@/components/DynamicTextField';
import Email from '@/assets/svgs/Email';
import AppIconButton from '@/components/AppIconButton';
import typography from '../theme/typography/Typography';
import { useNavigation } from 'expo-router';


export const ResetPassword = () => {
  const { theme, toggleTheme } = useThemeContext();
  const [email, setEmail] = useState("");
  const navigation = useNavigation();
  const screenNavigation = useNavigation() as { navigate: (routeName: string) => void };

  if (!theme || !toggleTheme) {
    throw new Error('Theme context is not properly initialized');
  }

  const handleBackPressed = ()=>{
    navigation.goBack();
  }
  const handleOnSubmitEditing = ()=>{

  }
  return (
    <AppView>
      <View style={styles.main}>
        <ClickableBack onClick={handleBackPressed}/>

        <View style={styles.textContainer}>
            <Text style={[typography.heading2, {textAlign:'center'}]}>Forgot Password?</Text>
            <Text style={[typography.body3, {textAlign:'center'}]}>Type your email, we will send you
            verivication code via email</Text>
        </View>

        <View style={styles.buttonTextContainer}>
        <DynamicTextField 
                  textFieldType={TextFieldType.NORMAL}
                  leadingIcon={<Email />}
                  keyboardType={KeyboardType.EMAIL}
                  imeAction={ImeActionType.DONE}
                  placeholder={"Enter Your Email"}
                  value={email}
                  onChangeText={function (text: string): void {
                      setEmail(text);
                  } }
                  onSubmitEditing={handleOnSubmitEditing}
        />


        <AppIconButton
                  text="Reset Password"
                  iconSize={35}
                  backgroundColor={theme.primary}
                  height={48}
                  onClick={() => {
                      screenNavigation.navigate('OtpVerification');
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

export default ResetPassword;
