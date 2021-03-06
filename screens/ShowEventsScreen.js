import React, { Component } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { useFocusEffect } from '@react-navigation/native';

import EventCard from "../components/event-card.js";
import Hr from "../components/hr.js";

//styles
import defaultStyles from "../styles/defaultStyles.js";

export default class ShowEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
    this.loop = [0, 1, 2, 3, 4, 5];
  }

  componentDidMount() {
    this.getEventsData();
  }

  getEventsData() {
    fetch("http://127.0.0.1:8000/api/user/events", {
      method: "get",
      headers: {     
        Authorization: "Bearer " + global.user_api_token
      }, 
    }).then(response => response.json())
      .then(resp => this.setState({events: resp}));
  }

  render() {
    return (
      <View style={defaultStyles.container}>
        <ScrollView style={styles.scrollContainer}>
          {this.state.events.map((event, index) => {
            return (
              <View key={index}>
                <EventCard
                  event={event}
                  navigation={this.props.navigation}
                  edit={true}
                />
                {index != this.state.events.length - 1 && <Hr size="20" />}
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
  },
});
