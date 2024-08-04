import AppView from "@/components/AppView";
import { useNavigation } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { useThemeContext } from "../theme/ThemeContext";
import typography from "../theme/typography/Typography";
import AppIconButton from "@/components/AppIconButton";
import ClickableText from "@/components/ClickAbleText";

export const Boarding = () => {
  const navigation = useNavigation() as { navigate: (routeName: string) => void };
  const { theme } = useThemeContext();

  return (
    <AppView>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={[typography.h2, styles.title]}>Let's Get Started</Text>
          <Text style={[typography.body2, styles.description]}>
            Find the right ticket and what you want only in my ticket.
          </Text>
        </View>

        <AppIconButton
          text="Sign Up Email"
          iconSize={35}
          height={48}
          onClick={() => {
            navigation.navigate("SignUp")
          }}
          icon={require("@/assets/images/email.png")}
        />

        <Text style={[typography.body3, styles.description]}>
          Or Use Instant Sign Up
        </Text>

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

        <ClickableText
          textBeforeLink="Already Have an Account?"
          linkText=" Sign In"
          onLinkPress={() => {
            navigation.navigate("SignIn")
          }}
        />
        
        <ClickableText
        textBeforeLink="Forgot Password?"
        linkText=" Reset"
        onLinkPress={() => {
          // TODO: Implement sign in functionality
        }}
      />
      </View>
    </AppView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignContent: "center",
    justifyContent: "center",
    gap: 16,
  },
  textContainer: {
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
    gap: 5,
  },
  title: {
    textAlign: "center",
    lineHeight: 36,
  },
  description: {
    textAlign: "center",
    lineHeight: 48,
  },
});