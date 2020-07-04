import React, { Component } from "react";
import { ScrollView, View, StyleSheet } from "react-native";

import ProfileCard from "../components/profile-card.js";
import Hr from "../components/hr.js";
import Search from "../components/search.js";

//styles
import defaultStyles from "../styles/defaultStyles.js";

export default class HomeScreen extends Component {
  constructor({navigation}) {
    super(navigation);
    this.state = {
      events: [],
    };
    this.navigation = navigation;
    this.loop = [0, 1, 2, 3, 4, 5];
  }

  componentDidMount() {
    this.getEventsData();
  }

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
                  imagePath={require("../assets/images/show.png")}
                  name={event.title}
                  location={event.location}
                  infoDate={event.date}
                  attractions={event.attractions}
                  description={event.description}
                  price={event.price}
                  category={event.event_category.name}
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
