import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const Profile = () => {
  // Mock user data - bạn có thể thay bằng data thực từ auth
  const user = {
    name: "Movie Lover",
    email: "user@example.com",
    avatar: icons.person,
    stats: {
      totalSearches: 0,
      savedMovies: 0,
      favoriteGenre: "Action"
    }
  };

  const profileItems = [
    { icon: icons.search, title: "Search History", subtitle: `${user.stats.totalSearches} searches` },
    { icon: icons.save, title: "Saved Movies", subtitle: `${user.stats.savedMovies} movies saved` },
    { icon: icons.star, title: "Favorite Genre", subtitle: user.stats.favoriteGenre },
  ];

  const renderProfileItem = (item: typeof profileItems[0], index: number) => (
    <TouchableOpacity 
      key={index}
      className="flex-row items-center bg-black/20 rounded-xl p-4 mb-3"
      activeOpacity={0.7}
    >
      <Image source={item.icon} className="w-6 h-6 mr-4" />
      <View className="flex-1">
        <Text className="text-white font-semibold text-lg">{item.title}</Text>
        <Text className="text-gray-400 text-sm">{item.subtitle}</Text>
      </View>
      <Image source={icons.arrow} className="w-4 h-4" />
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="absolute w-full z-0"
        resizeMode="cover"
      />

      <ScrollView className="flex-1 px-5">
        {/* Header */}
        <View className="w-full flex-row justify-center mt-20 items-center mb-8">
          <Image source={icons.logo} className="w-12 h-10" />
        </View>

        {/* Profile Info */}
        <View className="items-center mb-8">
          <View className="w-24 h-24 bg-black/30 rounded-full items-center justify-center mb-4">
            <Image source={user.avatar} className="w-12 h-12" />
          </View>
          <Text className="text-white font-bold text-2xl">{user.name}</Text>
          <Text className="text-gray-400 text-lg">{user.email}</Text>
        </View>

        {/* Profile Stats */}
        <View className="mb-6">
          <Text className="text-white font-bold text-xl mb-4">Statistics</Text>
          {profileItems.map(renderProfileItem)}
        </View>

        {/* Settings Section */}
        <View className="mb-6">
          <Text className="text-white font-bold text-xl mb-4">Settings</Text>
          
          <TouchableOpacity className="flex-row items-center bg-black/20 rounded-xl p-4 mb-3">
            <Text className="text-white font-semibold text-lg flex-1">Notifications</Text>
            <Text className="text-gray-400">On</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center bg-black/20 rounded-xl p-4 mb-3">
            <Text className="text-white font-semibold text-lg flex-1">Dark Mode</Text>
            <Text className="text-gray-400">On</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center bg-black/20 rounded-xl p-4 mb-3">
            <Text className="text-red-500 font-semibold text-lg">Sign Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
