import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View, FlatList, ImageBackground
} from 'react-native';

import { createStackNavigator } from 'react-navigation';

import AdCard from '../components/AdCard'

const BACKGROUND_IMAGE = require('../images/background.png')

const ADS = ['ad', 'ad', 'ad', 'ad', 'ad', 'ad', 'ad', 'ad', 'ad', 'ad', 'ad', 'ad']

export default class FeedScreen extends React.Component {
  static navigationOptions = {
    title: 'draper',
    headerStyle: {
      backgroundColor: '#4700d9',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 22
    }
  };

  render() {
    return (
      <ImageBackground
        style={{ width: '100%', height: '100%' }}
        resizeMode="center"
        source={BACKGROUND_IMAGE}
      >
        <FlatList
          data={ADS}
          renderItem={({item}) => <AdCard ad={item} />}
          contentContainerStyle={styles.flatListContainer}
          keyExtractor={(item, index) => `ad-${index}`}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  flatListContainer: {
    alignItems: 'center'
  }
});