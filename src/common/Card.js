import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './CardStyles';

import PropTypes from 'prop-types';

export const millisToMinutesAndSeconds = (millis) => {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};

const Card = (props) => {
  return (
    <View style={styles.renderContainer}>
      <TouchableOpacity
        style={styles.renderContainer}
        onPress={() => this.onPress}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{uri: props.data.artworkUrl100}}
          />
        </View>
        <View style={{flex: 0.7, justifyContent: 'space-around'}}>
          <Text style={styles.collectionTxt}>{props.data.collectionName}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.artistTxt}>{props.data.artistName}</Text>
            <Text style={styles.durationTxt}>
              {millisToMinutesAndSeconds(props.data.trackTimeMillis)}m
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

Card.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Card;
