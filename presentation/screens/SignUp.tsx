import AppView from "@/components/AppView";
import Lock from '@/assets/svgs/Lock';
import { useNavigation } from "expo-router";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { useThemeContext } from "../theme/ThemeContext";
import typography from "../theme/typography/Typography";
import AppIconButton from "@/components/AppIconButton";
import ClickableText from "@/components/ClickAbleText";
import DynamicTextField, { ImeActionType, KeyboardType, TextFieldType } from "@/components/DynamicTextField";
import { useRef, useState } from "react";
import PasswordInput from "@/components/PasswordInput";
import Email from "@/assets/svgs/Email";
import Back from "@/assets/svgs/Back";
import { ClickableBack } from "@/components/ClickableBack";

export const SignUp = () => {
  const navigation = useNavigation();
  const { theme } = useThemeContext();
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const inputRef = useRef<TextInput>(null);

  const handleOnSubmitEditing = () => {
    inputRef.current?.focus();  
    
  };
  const handleOnSubmitDone = () => {
    inputRef.current?.clear();  
  };

  const handleBackPress = () => {
    navigation.goBack();
    console.log("Back button pressed");
  };


  return (
    <AppView>
      <View style={styles.container}>
      <ClickableBack onClick={handleBackPress}/>
        <View style={styles.textContainer}>
          <Text style={[typography.h2, styles.title]}>Create an account</Text>
        </View>

        <DynamicTextField 
        inputRef={inputRef}
        textFieldType={TextFieldType.NORMAL} 
        leadingIcon={<Email />}
        keyboardType={KeyboardType.DEFAULT}
        imeAction={ImeActionType.NEXT}
        placeholder={"Enter Your Name"}
        value={name} 
        onChangeText={
            function (text: string): void {
                 setName(text);
              } 
            }
        onSubmitEditing={handleOnSubmitEditing}
              />

         <DynamicTextField 
        inputRef={inputRef}
        textFieldType={TextFieldType.NORMAL} 
        leadingIcon={<Email />}
        keyboardType={KeyboardType.EMAIL}
        imeAction={ImeActionType.NEXT}
        placeholder={"Enter Your Email"}
        value={email} 
        onChangeText={
            function (text: string): void {
                 setEmail(text);
              } 
            }
            onSubmitEditing={handleOnSubmitEditing}
              />
        
        <PasswordInput 
        inputRef={inputRef}
        leadingIcon={<Lock />} 
        value={password}
        onChangeText={(text: string) => setPassword(text)}
        placeholder="Enter Your Password"
        onSubmitEditing={handleOnSubmitDone}
        />


        <AppIconButton
                  text="Sign Up"
                  iconSize={35}
                  backgroundColor={theme.primary}
                  height={48}
                  onClick={() => {
                      // TODO: Implement sign up email functionality
                  } } icon={0}        />
    <ClickableText
        textBeforeLink="Forgot Password?"
        linkText=" Reset"
        onLinkPress={() => {
          // TODO: Implement sign in functionality
        }}
      />

<ClickableText
        textBeforeLink="Or"
        linkText=""
        onLinkPress={() => {
          // TODO: Implement sign in functionality
        }}
      />

        <AppIconButton
          text="Sign Up With Google"
          borderColor={theme.dark60}
          borderWidth={2}
          backgroundColor={theme.backgroundColor}
          iconSize={24}
          height={48}
          onClick={() => {
            // TODO: Implement sign up with Google functionality
          }}
          icon={require('@/assets/images/google.png')}
        />

        <AppIconButton
          text="Sign Up With Apple"
          borderColor={theme.dark60}
          borderWidth={2}
          backgroundColor={theme.backgroundColor}
          iconSize={24}
          height={48}
          onClick={() => {
            // TODO: Implement sign up with Apple functionality
          }}
          icon={require('@/assets/images/apple.png')}
        />

<View  style={styles.spacer}/>

        <Text 
        style={[typography.caption,{
            color:theme.textColor,
         paddingHorizontal:45,
         textAlign:'center'
         }]}>By sign in, accept te terms of service,
        Guidelines and have read Privacy Policy.</Text>
      </View>
    </AppView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignContent: "flex-start",
    justifyContent: "flex-start",
    gap: 16,
  },
  textContainer: {
    width: "100%",
    alignContent: "flex-start",
    justifyContent: "flex-start",
    gap: 10,
  },
  spacer:{
    height: 24,
  },
  title: {
    lineHeight: 36,
  },
  description: {
    textAlign: "center",
  },
});