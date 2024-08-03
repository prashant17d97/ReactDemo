import AppView from '@/components/AppView';
import OnboardingCardContainer from '@/components/OnboardingCardContainer';
import { useThemeContext } from '@/presentation/theme/ThemeContext';
import { useNavigation } from 'expo-router';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ColorValue, FlatList, ViewToken } from 'react-native';

// Define the props for the OnBoarding component
interface OnBoardingProps {
  onColorValue: (color: ColorValue | undefined) => void
}

const OnBoarding: React.FC<OnBoardingProps> = ({ onColorValue }) => {
  const navigation = useNavigation() as { navigate: (routeName: string) => void };

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<OnboardingCardContainer> | null>(null);
  const { theme } = useThemeContext();

  const screens: OnboardingCardContainer[] = [
    {
      title: 'look for jobs online quickly',
      description: 'we are the world\'s number one independent platform',
      buttonTitle: 'Next',
      onPress: function (): void {
        throw new Error('Function not implemented.');
      },
    },
  ];

  const handleNext = () => {
    navigation.navigate("HomeScreen");
    // if (currentIndex < screens.length - 1) {
    //   const nextIndex = currentIndex + 1;
    //   setCurrentIndex(nextIndex);
    //   flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
    // }
  };

  const onViewableItemsChanged = useCallback(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index || 0);
    }
  }, []);

  const viewabilityConfig = { itemVisiblePercentThreshold: 50 };

  // Call the onColorValue callback when the component mounts or theme.primary changes
  useEffect(() => {
    if (onColorValue) {
      onColorValue(theme.primary);
    }
  }, [theme.primary, onColorValue]);

  return (
    <AppView color={theme.primary}>
      <FlatList<OnboardingCardContainer>
        ref={flatListRef}
        data={screens}
        renderItem={({ item }) => (
          <OnboardingCardContainer
            title={item.title}
            description={item.description}
            buttonTitle={'Next'}
            onPress={handleNext}
          />
        )}
        keyExtractor={(_item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
    </AppView>
  );
};
export default OnBoarding;