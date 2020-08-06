import React, { Component } from "react";
import { StyleSheet, Alert } from "react-native";
import firebase from "../firebase/configFirebase";

import { Container, Form, Input, Item, Button, Label, Text } from "native-base";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  signUpUser = (email, password) => {
    try {
      if (this.state.password.length < 6) {
        Alert.alert("Please enter atleast 6 characters ");
        return;
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((data) => {
          firebase
            .database()
            .ref("users")
            .child(data.user.uid)
            .set({ email: email, uid: data.user.createdAt });
          Alert.alert("Sign up succeed");
        });
    } catch (error) {
      console.log(error);
    }
  };
  loginUser = (email, password) => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          this.props.navigation.navigate("Home");
        });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(email) => this.setState({ email })}
            />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={(password) => this.setState({ password })}
            />
          </Item>
          <Button
            full
            rounded
            success
            style={{ marginTop: 20 }}
            onPress={() => {
              this.loginUser(this.state.email, this.state.password);
            }}
          >
            <Text>Login</Text>
          </Button>
          <Button
            full
            rounded
            primary
            style={{ marginTop: 20 }}
            onPress={() => {
              this.signUpUser(this.state.email, this.state.password);
            }}
          >
            <Text>Sign Up</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    padding: 10,
  },
});
