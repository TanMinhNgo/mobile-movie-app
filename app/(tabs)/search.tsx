import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import { updateSearchCount } from "@/services/appwrite";
import useFetch from "@/services/useFetch";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    refetch: moviesRefetch,
    reset,
  } = useFetch(() => fetchMovies({ query: searchQuery }), false);

  const handleSearchSubmit = (text: string) => {
    setSearchQuery(text); // Trigger fetch API khi nhấn Enter
  };

  // Effect để fetch data khi searchQuery thay đổi
  useEffect(() => {
    const fetchData = async () => {
      if (searchQuery.trim().length > 0) {
        await moviesRefetch();
      } else {
        reset();
      }
    };

    fetchData();
  }, [searchQuery]);

  // Update search count - chỉ chạy khi có kết quả mới
  useEffect(() => {
    if (movies && movies.length > 0 && searchQuery.trim().length > 0) {
      updateSearchCount(searchQuery, movies[0]).catch(console.error);
    }
  }, [movies]);

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

      <View className="my-5">
        <SearchBar
          key="main-search-bar"
          placeholder="Search Movies..."
          onSubmitEditing={handleSearchSubmit}
          autoFocus={true}
        />
      </View>

      {moviesLoading && (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          className="my-3"
        />
      )}

      {moviesError && (
        <Text className="text-red-500 px-5 my-3">
          Error: {moviesError.message}
        </Text>
      )}

      {!moviesLoading &&
        !moviesError &&
        searchQuery.trim().length > 0 &&
        movies &&
        movies.length > 0 && (
          <Text className="text-white font-bold text-xl">
            Search Results for{" "}
            <Text className="text-accent">{searchQuery}</Text>
          </Text>
        )}
    </>
  );

  const ListEmptyComponent = () => {
    if (moviesLoading || moviesError) return null;

    return (
      <View className="mt-10 px-5">
        <Text className="text-gray-500 text-center">
          {searchQuery.trim().length === 0
            ? "Search for movies"
            : `No results found for "${searchQuery}"`}
        </Text>
      </View>
    );
  };

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
        data={movies}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        className="px-5"
        numColumns={3}
        columnWrapperStyle={columnWrapperStyle}
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

export default Search;