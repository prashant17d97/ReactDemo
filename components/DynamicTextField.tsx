import EyeOff from '@/assets/svgs/EyeOff';
import { useThemeContext } from '@/presentation/theme/ThemeContext';
import React, { ReactNode } from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';
// Enum to determine the type of text field
export enum TextFieldType {
  NORMAL = 'normal',
  PASSWORD = 'password',
}

export enum ImeActionType {
  DONE = 'done',
  GO = 'go',
  SEARCH = 'search',
  SEND = 'send',
  NEXT = 'next',
}

export enum KeyboardType {
  DEFAULT = 'default',
  EMAIL = 'email-address',
  NUMBERIC = 'numeric',
  PHONE_PAD = 'phone-pad',
}

interface Props {
  inputRef: React.RefObject<TextInput>;
  leadingIcon?: ReactNode;
  trailingIcon?: any;
  textFieldType: TextFieldType;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  maxLength?: number;
  singleLine?: boolean;
  imeAction?: ImeActionType;
  keyboardType?: KeyboardType;
  onSubmitEditing?: () => void; 
}

const DynamicTextField: React.FC<Props> = ({
    inputRef,
  leadingIcon,
  trailingIcon= {EyeOff},
  value,
  onChangeText,
  placeholder,
  maxLength = 100,
  singleLine = true,
  imeAction = ImeActionType.DONE,
  keyboardType = KeyboardType.DEFAULT,
  onSubmitEditing,
}) => {

  const { theme } = useThemeContext();
  return (
    <View style={[styles.container,{backgroundColor:theme.dark60}]}>
      {leadingIcon}
      <TextInput
      ref={inputRef}
        style={[styles.input, {color:theme.textColor}]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={theme.textColor}
        maxLength={maxLength}
        numberOfLines={singleLine ? 1 : undefined}
        multiline={!singleLine}
        returnKeyType={imeAction}
        keyboardType={keyboardType}
        onSubmitEditing={onSubmitEditing}
      />
      {trailingIcon && (
        <Image source={trailingIcon} style={styles.iconContainer} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#333',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 16,
        height: 48,
      },
      input: {
        flex: 1,
        color: '#fff',
        fontSize: 16,
        marginHorizontal: 10,
      },
      iconContainer: {
        marginRight: 8,
      },
  });

export default DynamicTextField;


