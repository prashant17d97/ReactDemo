import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ColorValue } from 'react-native';
import { useThemeContext } from '../theme/ThemeContext';
import AppView from '../../components/AppView';
import { ClickableBack } from '@/components/ClickableBack';
import AppIconButton from '@/components/AppIconButton';
import typography from '../theme/typography/Typography';
import { useNavigation } from 'expo-router';
import OTPInput from '@/components/OtpInptu';


export const OtpVerification = () => {
  const { theme } = useThemeContext();
  const [otp, setOtp] = useState("");
  const navigation = useNavigation();
  const screenNavigation = useNavigation() as { navigate: (routeName: string) => void };
  
  const handleBackPressed = ()=>{
    navigation.goBack()
  }
  const handleOnSubmitEditing = ()=>{

  }
  return (
    <AppView>
      <View style={styles.main}>
        <ClickableBack onClick={handleBackPressed}/>

        <View style={styles.textContainer}>
            <Text style={[typography.heading2, {textAlign:'center'}]}>Verify Code</Text>
            <Text style={[typography.body3, {textAlign:'center'}]}>The confimation code was
            sent via email</Text>
        </View>

        <View style={styles.buttonTextContainer}>
        
        <OTPInput/>

        <AppIconButton
                  text="Verify"
                  iconSize={35}
                  backgroundColor={theme.primary}
                  height={48}
                  onClick={() => {
                    screenNavigation.navigate('NewPassword');
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
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap:24,
  },
  textContainer:{
    width:'100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap:10,
  }
});

export default OtpVerification;
