// components/Categories.js

import React from "react";
import { ScrollView } from "react-native";

/* Import Components */
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const categoryData = [
    { imgUrl: "https://links.papareact.com/gn7", title: "testing 1" },
    { imgUrl: "https://links.papareact.com/gn7", title: "testing 2" },
    { imgUrl: "https://links.papareact.com/gn7", title: "testing 3" },
    { imgUrl: "https://links.papareact.com/gn7", title: "testing 4" },
    { imgUrl: "https://links.papareact.com/gn7", title: "testing 5" },
  ];

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categoryData.map((category, index) => (
        <CategoryCard
          key={index}
          imgUrl={category.imgUrl}
          title={category.title}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
