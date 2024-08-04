import { useThemeContext } from '@/presentation/theme/ThemeContext';
import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const OTPInput = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef<TextInput[]>([]);
  const { theme } = useThemeContext();

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (index: number) => {
    if (index > 0) {
      inputRefs.current[index - 1]?.focus();
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
    }
  };

    function CursorValue(): import("react-native").CursorValue | undefined {
        throw new Error('Function not implemented.');
    }

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={(ref) => ref && (inputRefs.current[index] = ref)}
          style={[
            styles.input,
            {
              color: theme.primary,
              borderColor: theme.primary,
            },
          ]}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={(value) => handleOtpChange(value, index)}
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === 'Backspace') {
              handleKeyPress(index);
            }
          }}
          placeholder="0"
          placeholderTextColor={theme.primary}
          defaultValue={digit}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 24,
    textAlign: 'center',
  },
});

export default OTPInput;