import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Button as CustomButton } from "react-native-elements";
import Hr from "../../components/hr.js";
import { NavigationContainer } from "@react-navigation/native";

export default class LoginScreen extends Component {
  constructor({ navigation }) {
    super(navigation);
    this.state = {
      username: null,
      password: null,
    };
    this.navigation = navigation;
  }
  render() {
    return (
      <View style={styles.fullScreen}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>MatchPoint</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Usuário"
              onChange={(text) => this.setState({ username: text })}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Senha"
              onChange={(text) => this.setState({ password: text })}
            />
            <View style={styles.forgotPassword}>
              <TouchableOpacity onPress={() => alert("Botão esqueceu senha")}>
                <Text style={styles.forgotPasswordButton}>
                  Esqueceu sua senha?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.signinContainer}>
            <CustomButton
              style={styles.buttonLogin}
              title="Entrar"
              onPress={() => this.navigation.navigate("AppNavigator")}
            />
          </View>
          <Hr size="60" />
          <View>
            <Text style={styles.signupSpan}>OU</Text>
          </View>
          <Button
            style={styles.signupButton}
            title="Criar conta"
            onPress={() => this.navigation.navigate("SignIn")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: "rgb(255, 255, 255)",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 30,
  },
  logo: {
    fontWeight: "800",
    fontSize: 36,
  },
  logoContainer: {
    borderBottomWidth: 2,
    borderColor: "rgb(254, 115, 62)",
  },
  inputContainer: {
    width: "100%",
    marginTop: 60,
  },
  textInput: {
    width: "100%",
    borderRadius: 5,
    backgroundColor: "rgb(225, 225, 225)",
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  forgotPassword: {
    flexDirection: "row-reverse",
  },
  forgotPasswordButton: {
    color: "rgb(0, 122, 255)",
  },
  buttonLogin: {
    marginTop: 35,
    borderColor: "black",
  },
  signinContainer: {
    width: "100%",
    borderRadius: 5,
  },
  signupSpan: {
    marginTop: -69,
    backgroundColor: "white",
    paddingHorizontal: 14,
    color: "gray",
    fontWeight: "800",
  },
  signupButton: {
    marginTop: 200,
  },
});
