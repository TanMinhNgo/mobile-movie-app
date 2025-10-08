import MovieCard from "@/components/MovieCard";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';

const Saved = () => {
  // Mock saved movies data - bạn có thể thay bằng data thực từ storage
  const savedMovies: Movie[] = [];

  const columnWrapperStyle = {
    justifyContent: "center" as const,
    gap: 16,
    marginVertical: 16,
  };

  const contentContainerStyle = { paddingBottom: 10 };

  const ListHeaderComponent = () => (
    <>
      <View className="w-full flex-row justify-center mt-20 items-center">
        <Image source={icons.logo} className="w-12 h-10" />
      </View>
      
      <Text className="text-white font-bold text-2xl mt-5 text-center">
        Saved Movies
      </Text>
    </>
  );

  const ListEmptyComponent = () => (
    <View className="mt-20 px-5">
      <Text className="text-gray-500 text-center text-lg">
        No saved movies yet
      </Text>
      <Text className="text-gray-400 text-center mt-2">
        Save movies from search to see them here
      </Text>
    </View>
  );

  const renderItem = ({ item }: { item: Movie }) => <MovieCard {...item} />;

  const keyExtractor = (item: Movie) => item.id.toString();

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="absolute w-full z-0"
        resizeMode="cover"
      />

      <FlatList
        data={savedMovies}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        className="px-5"
        numColumns={3}
        columnWrapperStyle={savedMovies.length > 0 ? columnWrapperStyle : undefined}
        contentContainerStyle={contentContainerStyle}
        ListHeaderComponent={ListHeaderComponent}
        ListEmptyComponent={ListEmptyComponent}
        removeClippedSubviews={true}
        maxToRenderPerBatch={10}
        windowSize={5}
      />
    </View>
  );
};

export default Saved;
