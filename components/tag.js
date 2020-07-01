import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { debug } from "react-native-reanimated";
import { render } from "react-dom";

export default class Tag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: this.props.values.map((tag) => {
        return {
          name: tag,
          active: false,
        };
      }),
    };
    console.log(this.state.tags);
  }

  setActiveTag = (index) => {
    this.setState((state) => {
      var tags = state.tags;
      tags[index]["active"] = !tags[index]["active"];
      return {
        tags,
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {(this.state.tags || []).map((tag, index) => {
          return (
            <Text
              key={index}
              style={[
                styles.tag,
                {
                  backgroundColor: tag.active
                    ? "rgb(254, 115, 62)"
                    : "rgb(220, 220, 220)",
                },
              ]}
              onPress={() => this.setActiveTag(index)}
            >
              {tag.name}
            </Text>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tag: {
    borderRadius: 10,
    overflow: "hidden",
    fontSize: 13,
    marginRight: 12,
    paddingVertical: 1,
    paddingHorizontal: 10,
    marginBottom: 12,
    color: "black",
  },
});
