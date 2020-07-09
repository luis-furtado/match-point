import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native";

import Hr from "../../components/hr.js";
import Tags from "../../components/tag.js";
import { Icon } from "react-native-elements";

export default class EditProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: global.user.name,
      email: global.user.email,
      phone: global.user.phone,
      password: null,
    };
  }

  sendUserData() {
    const formData = new FormData();
    formData.append('name', this.state.name);
    formData.append('email', this.state.email);
    // formData.append('phone', this.state.phone);
    formData.append('password', this.state.password);

    fetch("http://127.0.0.1:8000/api/user/edit", {
      method: "post",
      headers: {     
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + global.user_api_token,
      }, 
      body: formData,
    }).then((response) => {
      if(response.status == '200') {
        alert('Mudança feita com sucesso!');
        return this.props.navigation.goBack();
      }
      return alert('Erro no servidor');
  });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.photoContainer}>
          <Image
            style={styles.photo}
            source={
              this.props.imagePath ||
              require("../../assets/images/no-photo-profile.png")
            }
          />
          <Button title="Alterar foto Perfil" />
        </View>
        <Hr size="25" />
        <Text style={styles.ProfileSpan}>Informações Pessoais</Text>
        <ScrollView style={styles.profileContainer}>
          <View style={styles.input}>
            <Text style={styles.labelInput}>Nome:</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.setState({ name: text })}
              value={this.state.name}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.labelInput}>Email:</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.setState({ email: text })}
              value={this.state.email}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.labelInput}>Telefone:</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.setState({ phone: text })}
              value={this.state.phone}
            />
          </View>
          <View style={styles.input}>
          <Text style={styles.labelInput}>Senha:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="********"
            secureTextEntry={true}
            onChangeText={(text) => this.setState({ password: text })}
                />
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={() => this.sendUserData()}
          style={styles.submitContainer}
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
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginHorizontal: 30,
  },
  ProfileSpan: {
    fontWeight: "300",
    fontSize: 15,
    marginBottom: 50,
  },
  interestsSpan: {
    marginTop: 15,
    marginBottom: 5,
    fontSize: 15,
    fontWeight: "300",
  },
  profileContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  photoContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 30,
  },
  photo: {
    borderRadius: 120,
    borderWidth: 1.5,
    borderColor: "rgb(254, 115, 62)",
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  profileContainer: {
    marginTop: 15,
  },
  input: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  labelInput: {
    fontWeight: "200",
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: "rgb(200, 200, 200)",
    width: "65%",
    marginLeft: 10,
  },
  textAreaInput: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "rgb(200, 200, 200)",
    height: 100,
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
