import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TrackPlayer, {usePlaybackState} from 'react-native-track-player';

import Player from '../common/Player';
import playlistData from '../../data.json';
import localTrack from '../common/pure.m4a';

export default function AudioDetail(props) {
  const [audio] = useState(props.navigation.getParam('data'));
  console.log('+++++++++++++++++++>>>', audio);

  const playbackState = usePlaybackState();

  useEffect(() => {
    setup();
  }, []);
  AudioDetail.navigationOptions = {
    title: 'Audio Detail',
    headdingStyle: {
      fontWeight: '300',
      color: 'orange',
    },
    headerStyle: {
      backgroundColor: '#37474F',
    },
    headerTitleStyle: {color: 'white'},
  };

  async function setup() {
    await TrackPlayer.setupPlayer({});
    await TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
        TrackPlayer.CAPABILITY_STOP,
      ],
      compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
      ],
    });
  }

  async function togglePlayback() {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack == null) {
      await TrackPlayer.reset();
      await TrackPlayer.add(playlistData);
      await TrackPlayer.add({
        id: audio.artistId,
        url: localTrack,
        title: audio.collectionName,
        artist: audio.artistName,
        artwork: audio.artworkUrl100,
        duration: 28,
      });
      await TrackPlayer.play();
    } else {
      if (playbackState === TrackPlayer.STATE_PAUSED) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  }

  return (
    <View style={styles.container}>
      <Player
        // onNext={skipToNext}
        style={styles.player}
        // onPrevious={skipToPrevious}
        onTogglePlayback={togglePlayback}
        backCover={audio.artworkUrl100}
      />
      <Text style={styles.state}>{getStateName(playbackState)}</Text>
    </View>
  );
}

AudioDetail.navigationOptions = {
  title: 'Audio Detail',
};

function getStateName(state) {
  switch (state) {
    case TrackPlayer.STATE_NONE:
      return 'None';
    case TrackPlayer.STATE_PLAYING:
      return 'Playing';
    case TrackPlayer.STATE_PAUSED:
      return 'Paused';
    case TrackPlayer.STATE_STOPPED:
      return 'Stopped';
    case TrackPlayer.STATE_BUFFERING:
      return 'Buffering';
  }
}

// async function skipToNext() {
//   try {
//     await TrackPlayer.skipToNext();
//   } catch (_) {}
// }

// async function skipToPrevious() {
//   try {
//     await TrackPlayer.skipToPrevious();
//   } catch (_) {}
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#37474F',
  },
  description: {
    width: '80%',
    marginTop: 20,
    textAlign: 'center',
  },
  player: {
    marginTop: 40,
  },
  state: {
    marginTop: 20,
  },
});
