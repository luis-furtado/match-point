import React from "react";
import { Button } from "react-native";

//navigation
import { createStackNavigator } from "@react-navigation/stack";

//screens
import ShowProfileScreen from "./ShowProfileScreen.js";
import EditProfileScreen from "./EditProfileScreen.js";
import CreateEventScreen from "../CreateEventScreen.js";

const Stack = createStackNavigator();

export default function ProfileNavigation({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "rgb(254, 115, 62)",
        headerTitleStyle: {
          color: "black",
          fontWeight: "400",
        },
      }}
    >
      <Stack.Screen
        name="ProfileShow"
        component={ShowProfileScreen}
        options={{
          title: "Perfil",
          headerLeft: () => (
            <Button
              title="Editar"
              color="rgb(254, 115, 62)"
              onPress={() => navigation.navigate("ProfileEdit")}
            />
          ),
          headerRight: () => (
            <Button
              title="Sair"
              color="rgb(254, 115, 62)"
              onPress={() => alert("The EXIT button")}
            />
          ),
        }}
      />
      <Stack.Screen
        name="ProfileEdit"
        component={EditProfileScreen}
        options={{
          title: "Editar",
          headerRight: () => (
            <Button
              title="Salvar"
              color="rgb(254, 115, 62)"
              onPress={() => {
                alert("Salvo com sucesso!");
                navigation.navigate("ProfileShow");
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="CreateEvent"
        component={CreateEventScreen}
        options={{
          title: "Criar Evento",
        }}
      />
    </Stack.Navigator>
  );
}
