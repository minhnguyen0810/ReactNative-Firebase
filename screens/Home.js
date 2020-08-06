import React from "react";
import { View, Text, Button } from "react-native";

export default function Home(props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => {
          props.navigation.navigate("Info");
        }}
        title="Go to Info"
      ></Button>
    </View>
  );
}
