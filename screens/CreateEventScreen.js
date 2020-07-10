import React, { Component, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native";

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import Hr from "../components/hr.js";

import { Icon } from "react-native-elements";


export default class CreateEventScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'teste',
      attractions: 'teste',
      local: 'teste',
      date: '2020-07-09 20:49:42',
      price: '210',
      description: 'teste',
      tickets_available: '210',
      event_category_id: 1,
      image: null,
      categories: [],
    };
  }

  componentDidMount() { 
    this.getPermissionAsync();
    this.getEventCategoriesData();
  }

  getEventCategoriesData() {
    fetch("http://127.0.0.1:8000/api/events/categories", {
      method: "get",
    }).then(response => response.json())
      .then(resp => this.setState({categories: resp}))
  }

  sendUserData() {
    const formData = new FormData();
    formData.append('title', this.state.title);
    formData.append('attractions', this.state.attractions);
    formData.append('location', this.state.local);
    formData.append('date', this.state.date);
    formData.append('price', this.state.price);
    formData.append('description', this.state.description);
    formData.append('tickets_available', this.state.tickets_available);
    formData.append('event_category_id', this.state.event_category_id);
    // formData.append('image', this.state.image);
    // console.log(this.state.image);

    fetch("http://127.0.0.1:8000/api/user/events/create", {
      method: "post",
      headers: {     
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + global.user_api_token,
      }, 
      body: formData,
    }).then(response => response.json())
      .then((resp) => {
        if(resp.created_at) {
          alert('Evento criado com sucesso!');
          this.props.navigation.goBack();
        }
        else {
          alert('Faltam campos a serem preenchidos');
        }
      });
  }

  setCategory(index) {
    this.setState((state) => {
      var categories = state.categories;
      categories.forEach(category => category['active'] = false);
      categories[index]["active"] = !categories[index]["active"];
      return {
        categories,
      };
    });
    this.setState({event_category_id: this.state.categories[index].id});
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.photoContainer}>
          {this.state.image && <Image source={{ uri: this.state.image }} style={styles.photo}  />}
          <Button 
            title="Adicionar foto do evento" 
            onPress={this._pickImage}
          />
        </View>
        <Hr size={25} />
        <Text style={styles.ProfileSpan}>Informações Gerais</Text>
        <ScrollView style={styles.profileContainer}>
          <View style={styles.input}>
            <Text style={styles.labelInput}>Título:</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.setState({ title: text })}
              value={this.state.title}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.labelInput}>Atrações:</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.setState({ attractions: text })}
              value={this.state.attractions}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.labelInput}>Local:</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.setState({ local: text })}
              value={this.state.local}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.labelInput}>Data:</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.setState({ date: text })}
              value={this.state.date}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.labelInput}>Preço:</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.setState({ price: text })}
              value={this.state.price}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.labelInput}>Quantidade de ingressos disponíveis:</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.setState({ tickets_available: text })}
              value={this.state.tickets_available}
            />
          </View>
          <View style={styles.inputTextArea}>
            <TextInput
              style={styles.textAreaInput}
              underlineColorAndroid="transparent"
              placeholder="Digite a descrição do evento aqui..."
              placeholderTextColor="gray"
              numberOfLines={5}
              multiline={true}
              value={this.state.description}
              onChangeText={(text) => this.setState({description: text})}
            />
          </View>
          <Text style={styles.interestsSpan}>Categoria do evento (selecione uma)</Text>
          <View style={styles.tagContainer}>
          { this.state.categories.map((category, index) => {
            return (
              <Text
              key={index}
              style={[
                styles.tag,
                {
                  backgroundColor: category.active
                    ? "rgb(254, 115, 62)"
                    : "rgb(220, 220, 220)",
                },
              ]}
              onPress={() => this.setCategory(index)}
            >
              {category.name}
            </Text>
            );
          })}
          </View>
          <TouchableOpacity
                style={styles.submitContainer}
                onPress={() => this.sendUserData()}
              >
                <Icon
                  name="chevron-right"
                  type="font-awesome"
                  color="rgb(254, 115, 62)"
                  size={22}
                />
                <Text style={styles.submitButton}>Enviar</Text>
              </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginHorizontal: 30,
  },
  ProfileSpan: {
    fontWeight: "300",
    fontSize: 15,
  },
  interestsSpan: {
    marginTop: 15,
    marginBottom: 5,
    fontSize: 15,
    fontWeight: "300",
  },
  profileContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  photoContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 30,
  },
  photo: {
    borderRadius: 120,
    borderWidth: 1.5,
    borderColor: "rgb(254, 115, 62)",
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  profileContainer: {
    marginTop: 15,
  },
  input: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  labelInput: {
    fontWeight: "200",
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: "rgb(200, 200, 200)",
    width: "65%",
    marginLeft: 10,
  },
  textAreaInput: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "rgb(200, 200, 200)",
    height: 100,
  },
  submitContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    marginTop: -30,
  },
  submitButton: {
    color: "rgb(254, 115, 62)",
    fontSize: 16,
    marginRight: 12,
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
  tagContainer: {
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
