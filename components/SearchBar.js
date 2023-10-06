// components/SearchBar.js

import React from "react";
import { View, TextInput } from "react-native";

/* Import Icons */
import {
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";

const SearchBar = () => {
  return (
    <View className="flex-row items-center space-x-2 pb-2 mx-4">
      <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
        <MagnifyingGlassIcon />
        <TextInput
          placeholder="Restaurant name, cuisine, or a dish..."
          keyboardType="default"
        />
      </View>
      <AdjustmentsVerticalIcon color="#00CBB" />
    </View>
  );
};

export default SearchBar;
