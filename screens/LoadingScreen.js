import React, { Component } from "react";
import firebase from "firebase";
import { View, Text } from "react-native";

export default class LoadingScreen extends Component {
  componentDidMount() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.props.navigation.navigate("Login");
      } else {
        this.props.navigation.navigate("Home");
      }
    });
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Loading Screen</Text>
      </View>
    );
  }
}
