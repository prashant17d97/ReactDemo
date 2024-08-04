import Lock from '@/assets/svgs/Lock';
import EyeOff from '@/assets/svgs/EyeOff';
import EyeOn from '@/assets/svgs/EyeOn';
import { useThemeContext } from '@/presentation/theme/ThemeContext';
import React, { ReactNode, useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { ImeActionType, KeyboardType } from './DynamicTextField';

interface Props {
    inputRef: React.RefObject<TextInput>;
  leadingIcon?: ReactNode;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  maxLength?: number;
  singleLine?: boolean;
  imeAction?: ImeActionType;
  keyboardType?: KeyboardType;
  onSubmitEditing?: () => void; 
}

const PasswordInput: React.FC<Props> = ({
    inputRef,
  leadingIcon,
  value,
  onChangeText,
  placeholder,
  maxLength = 100,
  singleLine = true,
  imeAction = ImeActionType.DONE,  
  keyboardType = KeyboardType.DEFAULT, 
  onSubmitEditing,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { theme } = useThemeContext();

  return (
    <View style={[styles.container, { backgroundColor: theme.dark60 }]}>
      {leadingIcon}
      <TextInput
      ref={inputRef}
        style={[styles.input, { color: theme.textColor }]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={theme.textColor}
        maxLength={maxLength}
        numberOfLines={singleLine ? 1 : undefined}
        multiline={!singleLine}
        returnKeyType={imeAction}
        keyboardType={keyboardType}
        secureTextEntry={!isPasswordVisible}
        onSubmitEditing={onSubmitEditing}
      />
      <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
        {isPasswordVisible ? <EyeOff /> : <EyeOn />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    height: 48,
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    marginHorizontal: 16,
  },
  iconContainer: {
    marginRight: 8,
  },
});

export default PasswordInput;
