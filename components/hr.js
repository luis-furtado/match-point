import React from "react";
import { View, StyleSheet } from "react-native";

export default function Hr(props) {
  return (
    <View
      style={[
        styles.hr,
        { marginVertical: props.size ? parseInt(props.size) : 0 },
      ]}
    ></View>
  );
}

const styles = StyleSheet.create({
  hr: {
    marginHorizontal: 10,
    borderWidth: 0.5,
    borderColor: "rgb(200, 200, 200)",
    width: "100%",
  },
});
