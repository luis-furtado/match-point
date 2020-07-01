import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  Button,
  TouchableWithoutFeedbackBase,
} from "react-native";

import Tags from "../../components/tag.js";

import { Icon } from "react-native-elements";

import defaultStyles from "../../styles/defaultStyles.js";

import PickerSelect from "react-native-picker-select";

export default class SignInScreen extends Component {
  constructor({ navigation }) {
    super(navigation);
    this.state = {
      isLoading: false,
      name: null,
      email: null,
      phone: null,
      password: null,
    };
    this.navigation = navigation;
  }

  // componentDidMount() {
  //   this.getInterestsData();
  // }

  // getInterestsData() {
  //   fetch("http://127.0.0.1:8000/api/interests")
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ all_interests: data }))
  //     .catch((error) => console.log(error));
  // }

  sendUserData() {
    var data = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
    };

    fetch("http://127.0.0.1:8000/api/users/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstParam: "teste",
      }),
    }).then((response) => console.log(response));
  }

  render() {
    return (
      <View style={defaultStyles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButtonContainer}
            onPress={() => this.navigation.goBack()}
          >
            <View style={styles.iconHeader}>
              <Icon
                name="chevron-left"
                type="font-awesome"
                color="rgb(254, 115, 62)"
                size="22"
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Cadastre-se grátis</Text>
          <View style={styles.headerFreeSpace}></View>
        </View>
        <ScrollView style={styles.inputContainer}>
            <View>
              <Text style={styles.spanInput}>Informações pessoais:</Text>
              <View style={styles.input}>
                <Text style={styles.labelInput}>
                  {this.state.business ? "Nome da marca" : "Nome"}
                </Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="João da Silva"
                  onChange={(text) => this.setState({ name: text })}
                />
              </View>
              <View style={styles.input}>
                <Text style={styles.labelInput}>Email</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="exemplo@gmail.com"
                  onChange={(text) => this.setState({ email: text })}
                />
              </View>
              <View style={styles.input}>
                <Text style={styles.labelInput}>Telefone</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="61 999137803"
                  onChange={(text) => this.setState({ phone: text })}
                />
              </View>
              <View style={styles.input}>
                <Text style={styles.labelInput}>Senha</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="********"
                  secureTextEntry={true}
                  onChange={(text) => this.setState({ password: text })}
                />
              </View>
              <TouchableOpacity
                style={styles.submitContainer}
                onPress={() => this.sendUserData()}
              >
                <Icon
                  name="chevron-right"
                  type="font-awesome"
                  color="rgb(254, 115, 62)"
                  size="22"
                />
                <Text style={styles.submitButton}>Enviar</Text>
              </TouchableOpacity>
            </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconHeader: {
    flex: 0.5,
  },
  headerTitle: {
    flex: 1,
    color: "rgb(254, 115, 62)",
    fontWeight: "700",
    fontSize: 20,
    marginLeft: 16,
    textAlign: "center",
  },
  headerFreeSpace: {
    flex: 0.5,
  },
  backButtonContainer: {
    width: 66,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputContainer: {
    marginTop: 60,
  },
  labelInput: {
    fontWeight: "500",
    fontSize: 16,
    color: "gray",
  },
  labelSelectInput: {
    marginBottom: 15,
  },
  textInput: {
    width: "100%",
    borderRadius: 5,
    backgroundColor: "rgb(225, 225, 225)",
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginBottom: 20,
    marginTop: 4,
  },
  spanInput: {
    fontSize: 25,
    color: "gray",
    marginBottom: 40,
  },
  submitContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    marginTop: 40,
  },
  submitButton: {
    color: "rgb(254, 115, 62)",
    fontSize: 16,
    marginRight: 12,
  },
});
