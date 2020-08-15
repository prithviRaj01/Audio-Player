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
  const {
    collectionName,
    artistName,
    artworkUrl100,
    trackTimeMillis,
  } = props.data;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.container} onPress={props.onPress}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: artworkUrl100}} />
        </View>
        <View style={{flex: 0.7, justifyContent: 'space-around'}}>
          <Text style={styles.collectionTxt}>{collectionName}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.artistTxt}>{artistName}</Text>
            <Text style={styles.durationTxt}>
              {millisToMinutesAndSeconds(trackTimeMillis)}m
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
