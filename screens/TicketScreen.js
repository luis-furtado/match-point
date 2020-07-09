import React, { Component, useState } from "react";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

import Search from "../components/search.js";
import Tags from "../components/tag.js";
import TicketCard from "../components/ticket-card.js";
import Hr from "../components/hr.js";

import { Icon } from "react-native-elements";

import defaultStyles from "../styles/defaultStyles.js";

export default class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      tickets: [],
    };
  }

  componentDidMount() {
    this.loadTicketsData();
  }

  loadTicketsData() {
    fetch("http://127.0.0.1:8000/api/user/tickets", {
      method: "get",
      headers: {     
        Authorization: "Bearer " + global.user_api_token
      }, 
    }).then(response => response.json())
      .then(resp => this.setState({tickets: resp}))
      .then(() => console.log(this.state.tickets));
  }

  render() {
    return (
      <View style={defaultStyles.container}>
        <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButtonContainer}
              onPress={() => this.props.navigation.goBack()}
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
            <Text style={styles.headerTitle}>Meus Ingressos</Text>
            <View style={styles.headerFreeSpace}></View>
          </View>
        <View>
        <ScrollView>
        { this.state.tickets.map((ticket) => {
          return (
            <TicketCard
              imagePath={require("../assets/images/show.png")}
              name={ticket.event.title}
              location={ticket.event.location}
              infoDate={ticket.event.date}
              ticketHash={ticket.hashid}
              price={ticket.event.price}
                  />
          );
           }) }
        </ScrollView>
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
  EventCards: {
    paddingTop: 20,
  },
});
