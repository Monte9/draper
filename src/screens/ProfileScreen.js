import React, { Component } from 'react';
import {
  ActivityIndicator, AsyncStorage, StatusBar, StyleSheet,
  View, Text, ImageBackground
} from 'react-native';

const BACKGROUND_IMAGE = require('../images/background.png')

export const LIGHT_GRAY = '#eeeeee';

export default class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const score = (navigation.state.params && navigation.state.params.score)

    return {
      headerTitle: 'About',
      headerStyle: {
        backgroundColor: LIGHT_GRAY,
        marginLeft: 15,
        marginRight: 15,
        borderBottomWidth: 0
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontSize: 22
      }
    };
  };

  render() {
    return (
      <ImageBackground
        style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: LIGHT_GRAY }}
        resizeMode='contain'
        source={BACKGROUND_IMAGE}
      >
        <ActivityIndicator size="large" />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});
