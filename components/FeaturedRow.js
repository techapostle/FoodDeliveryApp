// components/FeaturedRow.js

/* Import React Libraries */
import React from "react";
import { View, Text, ScrollView } from "react-native";

/* Import Icons */
import { ArrowRightIcon } from "react-native-heroicons/outline";

/* Import Components */
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description, featuredCategory }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="pt-4"
      >
        <RestaurantCard
          id={1234}
          imgUrl="https://links.papareact.com/gn7"
          title="Restaurant 1"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is a short description"
          dishes={[]}
          long={-122.084}
          lat={37.4219983}
        />
        <RestaurantCard
          id={1234}
          imgUrl="https://links.papareact.com/gn7"
          title="Restaurant 1"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is a short description"
          dishes={[]}
          long={-122.084}
          lat={37.4219983}
        />
        <RestaurantCard
          id={1234}
          imgUrl="https://links.papareact.com/gn7"
          title="Restaurant 1"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is a short description"
          dishes={[]}
          long={-122.084}
          lat={37.4219983}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
