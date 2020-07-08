import React, { Component } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { useFocusEffect } from '@react-navigation/native';

import ProfileCard from "../components/profile-card.js";
import Hr from "../components/hr.js";
import Search from "../components/search.js";

//styles
import defaultStyles from "../styles/defaultStyles.js";

export default class HomeScreen extends Component {
  constructor({navigation}) {
    super({navigation});
    this.state = {
      events: [],
    };
    this.loop = [0, 1, 2, 3, 4, 5];
    this.navigation = navigation;
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
      .then(() => console.log(this.state.events));
  }

  render() {
    return (
      <View style={defaultStyles.container}>
        <Search />
        <ScrollView style={styles.scrollContainer}>
          {this.state.events.map((event, index) => {
            return (
              <View>
                <ProfileCard
                  id={event.id}
                  imagePath={require("../assets/images/show.png")}
                  title={event.title}
                  location={event.location}
                  date={event.date}
                  attractions={event.attractions}
                  description={event.description}
                  price={event.price}
                  event_category={event.event_category}
                  tickets_available={event.tickets_available}
                  navigation={this.navigation}
                  refreshHome={() => this.getEventsData() }
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
    marginTop: 25,
  },
});
