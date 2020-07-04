import React from "react";
import { View, Image, StyleSheet, Text, FlatList } from "react-native";
import Tag from "../components/tag.js";

import { Icon } from "react-native-elements";

export default function ProfileCard(props) {
  return (
    <View style={props.style}>
      <View style={styles.container}>
        <Image
          style={styles.photo}
          source={
            props.imagePath || require("../assets/images/no-photo-profile.png")
          }
        />
        <View style={styles.nameUsernameContainer}>
          <Text style={styles.name}>{props.name}</Text>
          <View>
            <View style={styles.infoContainer}>
            <Icon name="hourglass-half" type="font-awesome" size="14" />
              <Text style={styles.info}>
                {props.infoDate}
              </Text>
            </View>
            <View style={styles.locationContainer}>
              <Icon name="map-marker" type="font-awesome" size="14" />
              <Text style={styles.info}>{props.location}</Text>
            </View>
          </View>
        </View>
        <View style={styles.rateContainer}>
          <Text style={styles.price}>R$ {props.price},00</Text>
        </View>
      </View>
      <View style={styles.attractionsContainer}>
        <Icon name="users" type="font-awesome" size="14" />
        <Text style={styles.infoAttractions}>
          {props.attractions}
        </Text>
      </View>

      <Text style={styles.description}>{props.description}</Text>
      <View style={styles.bottomContainer}>
        <View style={styles.tagsContainer}>
          <Text style={styles.tag}>{props.category}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontWeight: "500",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 5,
  },
  attractionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 15,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 5,
    marginLeft: -1,
  },
  infoLogo: {
    width: 12,
    height: 12,
  },
  info: {
    fontWeight: "200",
    marginLeft: 5,
  },
  infoAttractions: {
    fontWeight: "400",
    marginLeft: 10,
  },
  rateContainer: {
    height: "100%",
  },
  price: {
    textAlign: "right",
    fontWeight: "800",
    color: "rgb(254, 90, 31)",
    fontSize: 12,
  },
  priceSpanUp: {
    fontSize: 11,
    fontWeight: "300",
  },
  priceSpanDown: {
    textAlign: "right",
    fontSize: 11,
    fontWeight: "300",
  },
  photo: {
    flex: 1.2,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: "rgb(254, 115, 62)",
    width: "100%",
    height: 60,
  },
  nameUsernameContainer: {
    flex: 4.5,
    marginHorizontal: 10,
  },
  description: {
    marginTop: 10,
    fontWeight: "200",
  },
  bottomContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tagsContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
  tag: {
    borderRadius: 10,
    overflow: "hidden",
    fontSize: 13,
    marginRight: 12,
    paddingVertical: 1,
    paddingHorizontal: 10,
    backgroundColor: "rgb(220, 220, 220)",
  },
  yearsOldContainer: {
    flexDirection: "row",
  },
  yearsOld: {
    fontWeight: "500",
  },
  yearsOldSpan: {
    fontWeight: "300",
  },
});
