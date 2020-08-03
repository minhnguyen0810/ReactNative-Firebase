import React from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function CategoryListItem(props) {
  let { title, img } = props.category;

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        Alert.alert("Click!");
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Image source={img} style={styles.categoryImage} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 16,
    borderRadius: 4,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    marginBottom: 16,
    elevation: 1,
  },
  categoryImage: {
    height: 64,
    width: 64,
  },
  title: {
    textTransform: "uppercase",
    marginBottom: 8,
    fontWeight: "700",
  },
});
