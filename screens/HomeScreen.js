import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

/* Icons */
import { UserIcon, ChevronDownIcon } from "react-native-heroicons/outline";

/* Import Components */
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import SearchBar from "../components/SearchBar";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-grow">
          <View>
            <Text className="font-bold text-gray-400 text-xs">
              Delivering Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CBB" />
            </Text>
          </View>
        </View>
        <UserIcon size={35} color="#00CBB" />
      </View>

      {/* Search Bar */}
      <SearchBar />

      {/* Body */}
      <ScrollView className="bg-gray-100" contentContainerStyle={{}}>
        {/* Categories */}
        <Categories />
        {/* Featured Rows */}
        <FeaturedRow
          id="1234"
          title="Featured"
          description="Paid placements from our partners"
          featuredCategory="featured"
        />
        <FeaturedRow
          id="5678"
          title="Tasty discounts"
          description="Everyday discounts from the top tasty restaurants"
          featuredCategory="discounts"
        />
        <FeaturedRow
          id="91011"
          title="Offers near you"
          description="Support local restaurants with juicy offers"
          featuredCategory="offers"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
