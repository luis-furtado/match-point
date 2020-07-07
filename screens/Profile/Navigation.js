import React from "react";
import { Button } from "react-native";

//navigation
import { createStackNavigator } from "@react-navigation/stack";

//screens
import ShowProfileScreen from "./ShowProfileScreen.js";
import EditProfileScreen from "./EditProfileScreen.js";
import CreateEventScreen from "../CreateEventScreen.js";
import ShowEventsScreen from "../ShowEventsScreen.js";

const Stack = createStackNavigator();

export default function ProfileNavigation({ navigation }) {
  return (
    <Stack.Navigator
    initialRouteName="ProfileShow"
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
        }}
      />
      <Stack.Screen
        name="ProfileEdit"
        component={EditProfileScreen}
        options={{
          title: "Editar",
        }}
      />
      <Stack.Screen
        name="CreateEvent"
        component={CreateEventScreen}
        options={{
          title: "Criar Evento",
        }}
      />
      <Stack.Screen
        name="ShowEvents"
        component={ShowEventsScreen}
        options={{
          title: "Meus Eventos",
        }}
      />
    </Stack.Navigator>
  );
}
