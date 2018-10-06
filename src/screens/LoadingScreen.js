import React, { Component } from 'react';
import {
  ActivityIndicator, AsyncStorage, StatusBar, StyleSheet, View, Text
} from 'react-native';

export default class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    this.props.navigation.navigate(!userToken ? 'App' : 'Onboarding');
  };

  render() {
    return (
      <View
        style={styles.container}
      >
        <ActivityIndicator size="large" />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4700d9'
  }
});
