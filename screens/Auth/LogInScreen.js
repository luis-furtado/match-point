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
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      authenticated: null,
    };
  }

  sendUserData() {
    const formData = new FormData();
    formData.append('email', this.state.email);
    formData.append('password', this.state.password);

    fetch("http://127.0.0.1:8000/api/login", {
      method: "post",
      headers: {     
        Accept: "application/json",
        "Content-Type": "application/json",
      }, 
      body: formData,
    }).then(response => response.json())
      .then((resp) => { 
        if(resp.data && resp.data.api_token) {
          global.user_api_token = resp.data.api_token; 
          global.user = resp.data; 
          this.setState({password: ''}); 
          return this.props.navigation.navigate('AppNavigator');
        }
          alert('Email ou senha incorretos!')
    })
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
              placeholder="Email"
              value={this.state.email}
              onChangeText={(text) => this.setState({ email: text })}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Senha"
              secureTextEntry={true}
              value={this.state.password}
              onChangeText={(text) => this.setState({ password: text })}
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
              onPress={
                () => this.sendUserData()
                // () => this.props.navigation.navigate('AppNavigator')
              }
            />
          </View>
          <Hr size="60" />
          <View>
            <Text style={styles.signupSpan}>OU</Text>
          </View>
          <Button
            style={styles.signupButton}
            title="Criar conta"
            onPress={() => this.props.navigation.navigate("SignIn")}
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
