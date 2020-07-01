import React from "react";

//navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//screens
import HomeScreen from "./HomeScreen.js";
import TicketScreen from "./TicketScreen.js";
import ProfileNavigation from "./Profile/Navigation.js";

//icons
import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          var props = {
            name: null,
            color: null,
          };

          switch (route.name) {
            case "Home":
              props = {
                name: "home",
                color: (iconName = focused ? "rgb(254, 90, 31)" : "gray"),
              };
              break;
            case "Tickets":
              props = {
                name: "ticket",
                type: "font-awesome",
                color: (iconName = focused ? "rgb(254, 90, 31)" : "gray"),
              };
              break;
            case "Profile":
              props = {
                name: "person-outline",
                color: (iconName = focused ? "rgb(254, 90, 31)" : "gray"),
              };
              break;
          }

          return <Icon {...props} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "rgb(254, 90, 31)",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Início" }}
      />
      <Tab.Screen
        name="Tickets"
        component={TicketScreen}
        options={{ title: "Meus Ingressos" }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigation}
        options={{ title: "Conta" }}
      />
    </Tab.Navigator>
  );
}
