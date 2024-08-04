import { useThemeContext } from '@/presentation/theme/ThemeContext';
import typography from '@/presentation/theme/typography/Typography';
import React from 'react';
import { Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle, View } from 'react-native';

interface ClickableTextProps {
  textBeforeLink: string;
  linkText: string;
  onLinkPress: () => void;
  linkColor?: string;
  linkStyle?: TextStyle;
  containerStyle?: ViewStyle;
}

const ClickableText: React.FC<ClickableTextProps> = ({
  textBeforeLink,
  linkText,
  onLinkPress,
  linkStyle}) => {
    const {theme} = useThemeContext()
  return (
    <View style={styles.container}>
        <Text style={typography.body3}>{textBeforeLink}</Text>
        <TouchableOpacity onPress={onLinkPress}>
        <Text style={[typography.body3, { color: theme.primary }, linkStyle]}>
          {linkText}
        </Text>
      </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent:'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
});

export default ClickableText;
