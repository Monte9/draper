import React, { Component } from 'react';
import {
  ActivityIndicator, AsyncStorage, StatusBar, StyleSheet,
  View, Text, ImageBackground, Image, TouchableOpacity
} from 'react-native';

const BACKGROUND_IMAGE = require('../images/background.png')
const HELP_IMAGE = require('../images/help.png')
const HOW_IMAGE = require('../images/how.png')
const LOGOUT_IMAGE = require('../images/logout.png')
const RATE_IMAGE = require('../images/rate.png')
const FACEBOOK_IMAGE = require('../images/facebook.png');
const TWITTER_IMAGE = require('../images/twitter.png');

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
        <View style={styles.viewContainer}>
          <TouchableOpacity style={styles.profileRow} onPress={() => this.props.navigation.navigate('Onboarding')} activeOpacity={0.6}>
            <Image source={HOW_IMAGE} style={styles.profileRowImage} />
            <Text style={styles.profileRowLabel}>How to Play</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileRow} onPress={() => console.log('Pressed')} activeOpacity={0.6}>
            <Image source={HELP_IMAGE} style={styles.profileRowImage} />
            <Text style={styles.profileRowLabel}>Get Help</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileRow} onPress={() => console.log('Pressed')} activeOpacity={0.6}>
            <Image source={RATE_IMAGE} style={styles.profileRowImage} />
            <Text style={styles.profileRowLabel}>Rate Us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileRow} onPress={() => console.log('Pressed')} activeOpacity={0.6}>
            <Image source={LOGOUT_IMAGE} style={styles.profileRowImage} />
            <Text style={styles.profileRowLabel}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.socialIconsContainer}>
            <TouchableOpacity onPress={() => console.log('Facebook pressed')} activeOpacity={0.6}>
              <Image source={FACEBOOK_IMAGE} style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Facebook pressed')} activeOpacity={0.6}>
              <Image source={TWITTER_IMAGE} style={styles.socialIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.legalContainer}>
          <TouchableOpacity onPress={() => console.log('Pressed')} activeOpacity={0.6}>
            <Text style={styles.legalText}>Terms | </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Pressed')} activeOpacity={0.6}>
            <Text style={styles.legalText}>Privacy | </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Pressed')} activeOpacity={0.6}>
            <Text style={styles.legalText}>Rules</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  viewContainer: {
    width: '80%',
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70
  },
  profileRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '80%',
    marginVertical: 20
  },
  profileRowImage: {
    width: 50,
    height: 50,
    marginRight: 20
  },
  profileRowLabel: {
    fontSize: 30,
    color: 'black'
  },
  socialIconsContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  socialIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 5
  },
  legalContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20
  },
  legalText: {
    fontSize: 18
  }
});
