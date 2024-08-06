// components/useBackHandler.ts
import { BackHandler } from 'react-native';

const useBackHandler = () => {
  const handleBackPress = () => {
    BackHandler.exitApp();
    return true;
  };

  return handleBackPress;
};

export default useBackHandler;