import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './PlayerStyles';
import TrackPlayer, {
  useTrackPlayerProgress,
  usePlaybackState,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {Image, Text, TouchableOpacity, View, ViewPropTypes} from 'react-native';

function ProgressBar() {
  const progress = useTrackPlayerProgress();

  return (
    <View style={styles.progress}>
      <View style={{flex: progress.position, backgroundColor: 'red'}} />
      <View
        style={{
          flex: progress.duration - progress.position,
          backgroundColor: 'grey',
        }}
      />
    </View>
  );
}

function ControlButton({trackName, onPress}) {
  return (
    <TouchableOpacity style={styles.controlButtonContainer} onPress={onPress}>
      <Text style={styles.controlButtonText}>{trackName}</Text>
    </TouchableOpacity>
  );
}

ControlButton.propTypes = {
  trackName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default function Player(props) {
  const playbackState = usePlaybackState();
  const [trackTitle, setTrackTitle] = useState('');
  const [trackArtwork, setTrackArtwork] = useState();
  const [trackArtist, setTrackArtist] = useState('');
  useTrackPlayerEvents(['playback-track-changed'], async (event) => {
    if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_TRACK_CHANGED) {
      const track = await TrackPlayer.getTrack(event.nextTrack);

      const {trackName, artistName, artworkUrl100} = track || {};

      setTrackTitle(trackName);
      setTrackArtist(artistName);
      setTrackArtwork(artworkUrl100);
    }
  });

  const {style, onTogglePlayback, backCover} = props;

  var middleButtonText = 'Play';

  if (
    playbackState === TrackPlayer.STATE_PLAYING ||
    playbackState === TrackPlayer.STATE_BUFFERING
  ) {
    middleButtonText = 'Pause';
  }

  return (
    <View style={[styles.card, style]}>
      <Image style={styles.cover} source={{uri: backCover}} />
      <ProgressBar />
      <Text style={styles.title}>{trackName}</Text>
      <Text style={styles.artist}>{artistName}</Text>
      <View style={styles.controls}>
        {/* <ControlButton title={'<<'} onPress={onPrevious} /> */}
        <ControlButton title={middleButtonText} onPress={onTogglePlayback} />
        {/* <ControlButton title={'>>'} onPress={onNext} /> */}
      </View>
    </View>
  );
}

Player.propTypes = {
  style: ViewPropTypes.style,
  // onNext: PropTypes.func.isRequired,
  // onPrevious: PropTypes.func.isRequired,
  onTogglePlayback: PropTypes.func.isRequired,
};

Player.defaultProps = {
  style: {},
};
