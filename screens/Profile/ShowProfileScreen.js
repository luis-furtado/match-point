import React, { Component } from "react";
import { Text, StyleSheet, View, Button, Image } from "react-native";

import Hr from '../../components/hr.js';
//compontents
import { NavigationContainer } from "@react-navigation/native";

export default class ProfileScreen extends Component {
  constructor({ navigation }) {
    super(navigation);
    this.state = {};
    this.navigation = navigation
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profileContainer}>
        <Text style={styles.spanInput}>Informações pessoais:</Text>
          <Text style={styles.infoPerfilText}>Nome: {global.user.name}</Text>
          <Text style={styles.infoPerfilText}>Email: {global.user.email}</Text>
          <Text style={styles.infoPerfilText}>Telefone: {global.user.phone}</Text>
          <Text style={styles.infoPerfilText}>Ingressos: {global.user.total_tickets}</Text>
        </View>
        <Hr size="35" />
        <View style={styles.button}>
        <Button
          onPress={ () => this.navigation.navigate('ProfileEdit') }
          title="Editar perfil"
          color="rgb(254, 115, 62)"
        />
        </View>
        <View style={styles.button}>
        <Button
          title="Criar Evento"
          color="rgb(254, 115, 62)"
          onPress={ () => this.navigation.navigate('CreateEvent') }
        />
        </View>
        <View style={styles.button}>
        <Button
          title="Sair"
          color="rgb(254, 115, 62)"
          onPress={() => this.navigation.navigate('LogIn')}
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    marginHorizontal: 30,
  },
  profileContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  profilePhoto: {},
  spanInput: {
    fontSize: 25,
    color: "gray",
    marginBottom: 40,
  },
  infoPerfilText: {
    fontWeight: '300',
    marginVertical: 3,
    marginBottom: 10,
    fontWeight: '200',
  },
  button: {
    paddingTop: 35,
  }
});
