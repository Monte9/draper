import React, { Component } from 'react';
import { Text, View, Image, AsyncStorage } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const PAGE_1_IMAGE = require('../images/pointing.png');
const PAGE_2_IMAGE = require('../images/peace.png');
const PAGE_3_IMAGE = require('../images/clap.png');
const DRAPER_LOGO = require('../images/draper-logo1.png');

export default class OnboardingScreen extends React.Component {
  _doneAsync = async () => {
    await AsyncStorage.setItem('userToken', '37j1k72j1');

    this.props.navigation.navigate('App');
  };

  render() {
    return (
      <Onboarding
        pages={[
          {
            backgroundColor: '#4700d9',
            title: 'Draper',
            image: <Image source={DRAPER_LOGO} style={{ height: 120 }} resizeMode="contain" />,
            subtitle: 'Give brands a piece of your mind. Earn cash while doing it.',
          },
          {
            backgroundColor: '#4700d9',
            title: 'Rate Ads',
            image: <Image source={PAGE_1_IMAGE} style={{ height: 120 }} resizeMode="contain" />,
            subtitle: 'Every ad you rate enters your name to win our lottery. Rate more ads for better odds.',
          },
          {
            backgroundColor: '#4700d9',
            title: 'Give Feedback',
            image: <Image source={PAGE_2_IMAGE} style={{ height: 120 }} resizeMode="contain" />,
            subtitle: "Every few ads, we'll ask you a question. With each answer, you'll earn 5x the points!",
          },
          {
            backgroundColor: '#4700d9',
            title: 'Earn Prizes',
            image: <Image source={PAGE_3_IMAGE} style={{ height: 120 }} resizeMode="contain" />,
            subtitle: 'Redeem your draper points for cash prizes, gift cards and more...',
          },
        ]}
        onDone={this._doneAsync}
        onSkip={this._doneAsync}
      />
    );
  }
}
