import { useThemeContext } from '@/presentation/theme/ThemeContext';
import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, ImageSourcePropType, ColorValue, View } from 'react-native';

interface AppIconButtonProps {
  icon: ImageSourcePropType;
  text: string;
  backgroundColor?: ColorValue;
  textColor?: ColorValue;
  borderColor?: ColorValue;
  borderWidth?: number;
  iconSize?: number;
  height?: number;
  onClick: () => void;
}

const AppIconButton: React.FC<AppIconButtonProps> = ({
  icon,
  text,
  backgroundColor,
  textColor,
  borderColor = "#FFFFFF",
  borderWidth = 0,
  iconSize = 35,
  height = 35,
  onClick
}) => {
  const { theme } = useThemeContext();
  const containerColor = backgroundColor ?? theme.dark60;
  const contentColor = textColor ?? theme.textColor;
  const outlineColor = borderColor;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: containerColor,
          borderColor: outlineColor,
          borderWidth: borderWidth,
          height:height
        }
      ]}
      onPress={onClick}
    >
      <Image source={icon} style={[styles.icon, {width:iconSize, height:iconSize}]} />
      <Text style={[styles.text, { color: contentColor }]}>
        {text}
      </Text>
      <View style={[styles.icon, {width:iconSize, height:iconSize}]}/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 16,
    borderColor: 'transparent', // Default border color if not provided
    borderWidth: 0, // Default border width if not provided
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10, // Add margin to space out icon from text
  },
  text: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default AppIconButton;
