import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';

interface OnboardingCardContainer{
    title: string;
    description: string;
    buttonTitle: string;
    onPress: () => void;
}
// OnboardingCardContainer component
const OnboardingCardContainer:React.FC<OnboardingCardContainer> = ({ title, description, buttonTitle, onPress }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <OnboardingCard onPress={onPress } title={title} description={description} buttonTitle={buttonTitle} />
      </ScrollView>
    </View>
  );
};


// OnboardingCard component
const OnboardingCard:React.FC<OnboardingCardContainer> = ({ title, description, buttonTitle, onPress }) => {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{description}</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
        <Text style={styles.footer}>
          By continuing, you agree to our Privacy Policy & Terms of Use
        </Text>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#75BC7B',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  card: {
    backgroundColor: '#1D1E1F',
    borderRadius: 25,
    paddingVertical: 16,
    paddingHorizontal:24,
    width: '100%',
    maxWidth: 400, // Adjust width as needed
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#75BC7B',
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default OnboardingCardContainer;
