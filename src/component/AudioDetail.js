import React, {useState} from 'react';
import {View, TouchableOpacity, ToastAndroid, Image} from 'react-native';
import {ValueLabel} from '../common/ValueLabel';
import styles from './AudioDetailStyles';

var SoundPlayer = require('react-native-sound');

var song = null;

export default function AudioList(props) {
  const receivedSong = props.navigation.getParam('data');
  const [pause, setPause] = useState(false);
  const [songDetail] = useState(receivedSong);

  AudioList.navigationOptions = {
    title: 'Audio Detail',
    headdingStyle: {
      fontWeight: '300',
    },
    headerStyle: {
      backgroundColor: '#37474F',
    },
    headerTitleStyle: {color: 'white'},
  };

  const onPressButtonPlay = () => {
    if (!pause) {
      song = new SoundPlayer(
        `${songDetail.previewUrl}`,
        SoundPlayer.MAIN_BUNDLE,
        (error) => {
          if (error)
            ToastAndroid.show(
              'Error when init SoundPlayer :(((',
              ToastAndroid.SHORT,
            );
          else {
            song.play((success) => {
              if (!success)
                ToastAndroid.show(
                  'Error when play SoundPlayer :(((',
                  ToastAndroid.SHORT,
                );
            });
          }
        },
      );
      setPause(!pause);
    }
  };

  const onPressButtonPause = () => {
    if (song != null) {
      if (pause) song.pause();

      setPause(!pause);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: songDetail.artworkUrl100}} />
      </View>
      <View style={styles.infoContainer}>
        <ValueLabel label={'Collection'} value={songDetail.collectionName} />
        <View style={styles.valueLabel}>
          <ValueLabel label={'Artist'} value={songDetail.artistName} />
          <ValueLabel label={'Genere'} value={songDetail.primaryGenreName} />
        </View>

        <ValueLabel label={'Song'} value={songDetail.trackName} />
      </View>
      <View style={{flex: 0.2}}>
        {!pause ? (
          <TouchableOpacity onPress={onPressButtonPlay}>
            <Image
              source={require('../utils/images/play.png')}
              style={styles.img}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={onPressButtonPause}>
            <Image
              source={require('../utils/images/pause.png')}
              style={styles.img}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
