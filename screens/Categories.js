import "react-devtools";
import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import CategoryListItem from "../components/CategoryListItem";
import WinterImage from "../assets/winter.png";

export default function App() {
  let [categoryListItems, setItems] = useState([
    {
      id: 1,
      title: "CategoryListItem",
      img: WinterImage,
    },
    {
      id: 2,
      title: "CategoryListItem",
      img: WinterImage,
    },
    {
      id: 3,
      title: "CategoryListItem",
      img: WinterImage,
    },
    {
      id: 4,
      title: "CategoryListItem",
      img: WinterImage,
    },
    {
      id: 5,
      title: "CategoryListItem",
      img: WinterImage,
    },
    {
      id: 6,
      title: "CategoryListItem",
      img: WinterImage,
    },
    {
      id: 7,
      title: "CategoryListItem",
      img: WinterImage,
    },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={categoryListItems}
        renderItem={({ item }) => <CategoryListItem category={item} />}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={{ paddingLeft: 16, paddingRight: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
});
