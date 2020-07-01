import React, { Component } from "react";
import { TextInput, StyleSheet, View } from "react-native";

import { Icon } from "react-native-elements";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      borderWidth: 0,
    };
    this.textInput = React.createRef();
  }

  render() {
    return (
      <View>
        <View
          onStartShouldSetResponder={() => this.textInput.focus()}
          style={[styles.container, { borderWidth: this.state.borderWidth }]}
        >
          <Icon style={styles.icon} name="search"></Icon>
          <TextInput
            ref={(elem) => (this.textInput = elem)}
            style={styles.textInput}
            placeholder="Busque aqui..."
            onChangeText={(search) => this.setState({ search: search })}
            value={this.state.search}
            defaultValue=""
            onFocus={() => this.setState({ borderWidth: 1.5 })}
            onBlur={() => this.setState({ borderWidth: 0 })}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 10,
    paddingHorizontal: 18,
    paddingVertical: 12,
    backgroundColor: "rgb(225, 225, 225)",
    borderColor: "rgb(254, 90, 31)",
  },
  textInput: {
    fontSize: 16,
  },
  icon: {
    marginRight: 15,
  },
});
