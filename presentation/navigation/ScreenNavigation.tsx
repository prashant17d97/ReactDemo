import { useNavigation } from "expo-router";

/**
 * Returns the navigation object with a typed navigate function.
 *
 * @returns The navigation object with a typed navigate function.
 */
export const useTypedNavigation = () => {
  return useNavigation() as { navigate: (routeName: string) => void };
};

/**
 * Navigates back to the previous screen.
 */
export const navigateUp = () => {
  const navigation = useNavigation();
  navigation.goBack();
};