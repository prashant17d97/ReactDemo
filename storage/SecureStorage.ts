import * as SecureStore from 'expo-secure-store';

// Function to save a value
export const saveKey = async (key: string, value: string): Promise<void> => {
  try {
    await SecureStore.setItemAsync(key, value);
  } catch (error) {
    console.error(`Failed to save value with key "${key}":`, error);
  }
};

// Function to retrieve a value
export const getKey = async (key: string): Promise<string | null> => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.error(`Failed to retrieve value with key "${key}":`, error);
    return null;
  }
};

// Function to remove a key
export const removeKey = async (key: string): Promise<void> => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.error(`Failed to remove value with key "${key}":`, error);
  }
};
