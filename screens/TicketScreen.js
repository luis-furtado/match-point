import React, { Component, useState } from "react";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

import Search from "../components/search.js";
import Tags from "../components/tag.js";
import TicketCard from "../components/ticket-card.js";
import Hr from "../components/hr.js";

import { Icon } from "react-native-elements";

import defaultStyles from "../styles/defaultStyles.js";

export default class SearchScreen extends Component {
  constructor({ navigation}) {
    super(navigation);
    this.state = {
      isLoading: false,
      search: null,
    };
    this.navigation = navigation;
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
        <View>
        <TicketCard
                imagePath={require("../assets/images/show.png")}
                name="Show Henrique e Juliano"
                location="Mané Garrincha, Brasília - DF"
                infoDate="18/7/2020  21:00"
                ticketHash="HIOF52F"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                price="400,00"
                category="teste"
              />
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 50,
  },
  headerTitle: {
    flex: 1,
    color: "rgb(254, 115, 62)",
    fontWeight: "700",
    fontSize: 20,
    marginLeft: 16,
    textAlign: "center",
    marginBottom: 5,
  },
  tagsSpan: {
    fontSize: 20,
    marginTop: 15,
  },
  profileCards: {
    paddingTop: 20,
  },
});
