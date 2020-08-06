import React, { Component } from "react";
import {
  Container,
  Header,
  Input,
  Item,
  Content,
  Button,
  Icon,
} from "native-base";
import { StyleSheet, Alert } from "react-native";
import firebase from "../firebase/configFirebase";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

export default class Info extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newContact: "",
    };
  }
  componentDidMount() {
    var that = this;
    firebase
      .auth()
      .signInWithEmailAndPassword("minh4@gmail.com", "123456")
      .then((data) => {
        that.registerForPushNotificationsAsync(data.user);
      });
  }

  addRow = (data) => {
    var key = firebase.database().ref("/contacts").push().key;
    firebase.database().ref("/contacts").child(key).set({ name: data });
  };

  registerForPushNotificationsAsync = async (user) => {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.Notifications
    );
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Permissions.askAsync(Permissions.Notifications);
      finalStatus = status;
    }

    if (finalStatus !== "granted") {
      return;
    }
    let token = await Notifications.getExpoPushTokenAsync();

    var updates = {};
    updates["/expoToken"] = token;
    firebase.database().ref("users").child(user.uid).update(updates);
  };

  render() {
    return (
      <Container style={styles.container}>
        <Header style={{ backgroundColor: "white" }}>
          <Content>
            <Item>
              <Input
                placeholder="Add name"
                onChangeText={(newContact) => {
                  this.setState({ newContact });
                }}
              />
              <Button
                onPress={() => {
                  this.addRow(this.state.newContact);
                }}
              >
                <Icon name="add" />
              </Button>
            </Item>
          </Content>
        </Header>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
});
