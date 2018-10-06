import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View, FlatList,
  ImageBackground, Dimensions, ActivityIndicator
} from 'react-native';

import { createStackNavigator } from 'react-navigation';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

import AdCard from '../components/AdCard'

const BACKGROUND_IMAGE = require('../images/background.png')
export const LIGHT_GRAY = '#eeeeee';

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

  constructor(props) {
    super(props);

    this.state = {
      ads: null,
      loading: false,
      error: null
    }
  }

  componentDidMount() {
    this.getAds()
  }

  async getAds() {
    try {
      this.setState({ loading: true })

      let response = await fetch(
        'https://morning-retreat-54047.herokuapp.com/api/ad/get_all_ads'
      );
      let responseJson = await response.json();

      this.setState({
        ads: responseJson.ads,
        loading: false,
        error: null
      })
    } catch (error) {
      this.setState({
        loading: false,
        error: 'Failed to fetch ads'
      })
    }
  }

  render() {
    const { loading, ads } = this.state;

    return (
      <ImageBackground
        style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: LIGHT_GRAY }}
        resizeMode='contain'
        source={BACKGROUND_IMAGE}
      >
        {loading ?
          <ActivityIndicator size="large" /> :
          <FlatList
            data={ads}
            renderItem={({item}) => <AdCard ad={item} />}
            contentContainerStyle={styles.flatListContainer}
            keyExtractor={(item, index) => `ad-${index}`}
            showsVerticalScrollIndicator={false}
          />
        }
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
