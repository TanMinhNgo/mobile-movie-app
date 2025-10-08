import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

interface Props {
  placeholder?: string;
  onSubmitEditing?: (text: string) => void;
  onPress?: () => void;
  autoFocus?: boolean;
}

const SearchBar = React.memo(({ 
  placeholder, 
  onSubmitEditing,
  onPress,
  autoFocus = false 
}: Props) => {
  return (
    <View className="flex mx-2 bg-transparent flex-row items-center gap-2 border border-white/20 rounded-xl px-3 py-2">
      <Image source={icons.search} className="w-5 h-5" />
      <TextInput
        key="search-input"
        onPress={onPress}
        placeholder={placeholder}
        onSubmitEditing={(e) => onSubmitEditing?.(e.nativeEvent.text)}
        className="flex-1 text-white"
        placeholderTextColor="#a8b5db"
        autoFocus={autoFocus}
        returnKeyType="search"
        blurOnSubmit={false}
      />
    </View>
  );
});

SearchBar.displayName = 'SearchBar';

export default SearchBar;
