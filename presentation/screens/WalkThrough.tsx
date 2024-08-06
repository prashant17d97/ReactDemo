import AppView from '@/components/AppView';
import WalkThroughContainer from '@/components/WalkThroughContainer';
import { useThemeContext } from '@/presentation/theme/ThemeContext';
import { useNavigation } from 'expo-router';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ColorValue, FlatList, ViewToken } from 'react-native';

const WalkThrough = () => {
  const navigation = useNavigation() as { navigate: (routeName: string) => void };

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<WalkThroughContainer> | null>(null);
  const { theme } = useThemeContext();

  const screens: WalkThroughContainer[] = [
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
    navigation.navigate("SignIn");
  };

  const onViewableItemsChanged = useCallback(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index || 0);
    }
  }, []);

  const viewabilityConfig = { itemVisiblePercentThreshold: 50 };
  return (
    <AppView >
      <FlatList<WalkThroughContainer>
        ref={flatListRef}
        data={screens}
        renderItem={({ item }) => (
          <WalkThroughContainer
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
export default WalkThrough;