import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";

import ProfileCard from "../components/profile-card.js";
import Hr from "../components/hr.js";
import Search from "../components/search.js";

//styles
import defaultStyles from "../styles/defaultStyles.js";

export default function HomeScreen() {
  const loop = [0, 1, 2, 3, 4, 5];
  return (
    <View style={defaultStyles.container}>
      <Search />
      <ScrollView style={styles.scrollContainer}>
        {loop.map((value, index) => {
          return (
            <View>
              <ProfileCard
                imagePath={require("../assets/images/show.png")}
                name="Show Henrique e Juliano"
                location="Mané Garrincha, Brasília - DF"
                infoDate="18/7/2020  21:00"
                attractions="Henrique & Juliano, Simome & Simaria"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                price="400,00"
                category="teste"
              />
              {index != loop.length - 1 && <Hr size="20" />}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    marginTop: 25,
  },
});
