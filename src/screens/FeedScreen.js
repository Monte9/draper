import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View, FlatList, Button,
  ImageBackground, Dimensions, ActivityIndicator, Image,
  TouchableOpacity
} from 'react-native';

import { createStackNavigator } from 'react-navigation';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

import AdCard from '../components/AdCard'

const BACKGROUND_IMAGE = require('../images/background.png')
const DOLLAR_IMAGE = require('../images/money-icon-final-thn.png')
const DOLLAR_IMAGE_2 = require('../images/money-icon-thk-final.png')
const DRAPER_LOGO = require('../images/draper-logo1.png')
const HELP_ICON = require('../images/help-icon.png')

export const LIGHT_GRAY = '#eeeeee';

const ADS = ['ad', 'ad', 'ad', 'ad', 'ad', 'ad', 'ad', 'ad', 'ad', 'ad', 'ad', 'ad']

export default class FeedScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const score = (navigation.state.params && navigation.state.params.score)

    return {
      headerTitle: (
        <View style={{ flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 25, marginRight: 5 }}>draper</Text>
          <Image source={DRAPER_LOGO} style={{ width: 22, height: 22 }} resizeMode="contain" />
        </View>
      ),
      headerLeft: (
        <View style={{ flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={DOLLAR_IMAGE_2} style={{ width: 25, height: 25, marginRight: 15 }} resizeMode="contain" />
          <Text style={{ color: 'white', fontSize: 25 }}>{score && score.toString() || '0'}</Text>
        </View>
      ),
      headerRight: (
        <TouchableOpacity onPress={navigation.getParam('goToProfile')}>
          <Image source={HELP_ICON} style={{ width: 25, height: 25 }} resizeMode="contain" />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: '#4700d9',
        marginLeft: 15,
        marginRight: 15
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 22
      },
      headerBackTitle: null
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      ads: null,
      loading: false,
      error: null,
      score: 0
    }
  }

  componentDidMount() {
    this.getAds()

    this.props.navigation.setParams({
      score: this.state.score,
      goToProfile: this._goToProfile
    })
  }

  _postScores = (ad,new_score) =>{
    console.log(ad)
    fetch('https://morning-retreat-54047.herokuapp.com/api/adscores/rate_ad', {
        method: 'POST',
        headers: { 
              'Accept': 'application/json',
              'Content-Type': 'application/json' 
              },
        body: JSON.stringify({id: ad._id, src: ad.src, company:ad.company, score: new_score})
    })
    .then((response) => JSON.stringify(response.json())) 
    // .then((responseData) => { console.log("response: " + responseData); })
    .catch((err) => { console.log(err); });
  }

  _increaseScore = (ad) => {
    const new_score = this.state.score + 1

    this.setState({ score: new_score }, () => {
      this.props.navigation.setParams({ score: this.state.score })
    });
    this._postScores(ad,new_score);
  };

  _goToProfile = () => {
    this.props.navigation.navigate('Profile')
  };

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
            renderItem={({item}) => <AdCard ad={item} increaseScore={this._increaseScore} />}
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
