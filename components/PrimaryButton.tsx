import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, GestureResponderEvent } from 'react-native';
import { useThemeContext } from '@/presentation/theme/ThemeContext'; // Adjust the path as needed

interface PrimaryButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  containerStyle?: ViewStyle; 
  textStyle?: TextStyle; 
  containerColor?: string; 
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title, onPress, containerStyle, textStyle, containerColor }) => {
  const { theme } = useThemeContext();

  const buttonStyle = {
    ...styles.button,
    backgroundColor: containerColor || theme.primary,
    ...containerStyle,
  };

  const buttonTextStyle = {
    ...styles.buttonText,
    color:theme.textColor,
    ...textStyle,
  };

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={buttonTextStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'medium',
  },
});

export default PrimaryButton;
