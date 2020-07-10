import React, { Component } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { useFocusEffect } from '@react-navigation/native';

import EventCard from "../components/event-card.js";
import Hr from "../components/hr.js";
import Search from "../components/search.js";

//styles
import defaultStyles from "../styles/defaultStyles.js";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
    this.loop = [0, 1, 2, 3, 4, 5];
  }

  componentDidMount() {
    this.getEventsData();

    // this.focusListener = navigation.addListener('didFocus', () => {
    //   this.getEventsData();
    // });
  }

  // componentWillUnmount() {
  //   this.focusListener.remove();
  // }

  getEventsData() {
    fetch("http://127.0.0.1:8000/api/events", {
      method: "get",
      headers: {     
        Authorization: "Bearer " + global.user_api_token
      }, 
    }).then(response => response.json())
      .then(resp => this.setState({events: resp}))
  }

  render() {
    return (
      <View style={defaultStyles.container}>
        <Search />
        <ScrollView 
          style={styles.scrollContainer}
          onScrollEndDrag={() => this.getEventsData()}
        >
          {this.state.events.map((event, index) => {
            return (
              <View key={index}>
                <EventCard
                  event={event}
                  refreshHome={() => this.getEventsData() }
                />
                {index != this.state.events.length - 1 && <Hr size={20} />}
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
    marginTop: 25,
  },
});
