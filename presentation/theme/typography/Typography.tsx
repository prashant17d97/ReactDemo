import { StyleSheet } from 'react-native';
import { lightTheme } from '../Colors';

// Define an extensive set of typography styles
const typography = StyleSheet.create({
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 24,
    color: lightTheme.textColor, // Example color, adjust as needed
  },
  h2: {
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 36,
    color: lightTheme.textColor,
  },
  h3: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 32,
    color: lightTheme.textColor,
  },
  h4: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
    color: lightTheme.textColor,
  },
  h5: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 26,
    color: lightTheme.textColor,
  },
  h6: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    color: lightTheme.textColor,
  },
  body1: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: lightTheme.textColor,
  },
  body2: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    color: lightTheme.textColor,
  },
  body3: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
    color: lightTheme.textColor,
  },
  caption: {
    fontSize: 12,
    fontWeight: '300',
    lineHeight: 18,
    letterSpacing:1.5,
    color: lightTheme.textColor,
  },
  subtitle1: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    color: lightTheme.textColor,
  },
  subtitle2: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: lightTheme.textColor,
  },
  small: {
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 16,
    color: lightTheme.textColor,
  },
  overline: {
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 14,
    color: lightTheme.textColor,
  },
  button: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: lightTheme.textColor,
  },
  link: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: lightTheme.textColor, // Example link color
  },
  error: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    color: lightTheme.textColor, // Example error color
  },
  success: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    color: '#00FF00', // Example success color
  },
  heading1: {
    fontSize: 36,
    fontWeight: 'bold',
    lineHeight: 44,
    color: '#000',
  },
  heading2: {
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 38,
    color: '#000',
  },
  heading3: {
    fontSize: 26,
    fontWeight: '600',
    lineHeight: 34,
    color: '#000',
  },
  heading4: {
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 30,
    color: '#000',
  },
  heading5: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 28,
    color: '#000',
  },
  heading6: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 26,
    color: '#000',
  },
});

export default typography;
