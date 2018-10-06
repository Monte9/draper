import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View, Dimensions, Image
} from 'react-native';

import EmojiFeedback from './EmojiFeedback'

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export const DARK_GRAY = '#666666';
export const MED_GRAY = '#bababa';
export const LIGHT_GRAY = '#eeeeee';

export default class AdCard extends Component {
  render() {
    const { ad } = this.props;

    return (
      <View style={styles.cardContainer}>
        <Image
          source={{ uri: ad.src }}
          style={styles.adImage}
          resizeMode='contain'
        />
        <View style={styles.scoreContainer}>
          <EmojiFeedback />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    width: DEVICE_WIDTH - 40,
    padding: 20,
    backgroundColor: LIGHT_GRAY,
    shadowColor: DARK_GRAY,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20
  },
  adImage: {
    width: '100%',
    height: 250
  },
  scoreContainer: {
    flex: 1,
    width: '100%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -10
  }
});
