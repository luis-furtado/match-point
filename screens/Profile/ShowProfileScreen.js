import React from "react";
import { Text, StyleSheet, View, Button, Image } from "react-native";

import Hr from '../../components/hr.js';
//compontents
import { NavigationContainer } from "@react-navigation/native";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.spanInput}>Informações pessoais:</Text>
      <View>
        <Text style={styles.infoPerfilText}>Nome: Luís Fernando Furtado</Text>
        <Text style={styles.infoPerfilText}>Email: luiscesm1@gmail.com</Text>
        <Text style={styles.infoPerfilText}>Telefone: (61) 99913-7803</Text>
        <Text style={styles.infoPerfilText}>Ingressos: 0</Text>
      </View>
      <Hr size="35" />
      <Button
        onPress={ navigation.navigate('CreateEvent') }
        title="Criar Evento"
        color="rgb(254, 115, 62)"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '25%',
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
  }
});
