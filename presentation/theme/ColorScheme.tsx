import { useColorScheme } from 'react-native';

const lightTheme = {
  backgroundColor: '#fff',
  textColor: '#333',
};

const darkTheme = {
  backgroundColor: '#222',
  textColor: '#fff',
};

export const useTheme = () => {
  const colorScheme = useColorScheme();
  return colorScheme === 'light' ? lightTheme : darkTheme;
};
