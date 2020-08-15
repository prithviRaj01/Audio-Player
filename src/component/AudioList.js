import React, {Component} from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import styles from './AudioListStyles';
import audioData from '../../audio.json';
import Card from '../common/Card';

export default class AudioList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: false,
      audioState: audioData.results,
    };
  }

  onPullDown = () => {
    this.setState({refresh: true});
    this.props.getAudioList();
    this.setState({refresh: false});
  };

  componentDidMount() {
    this.props.getAudioList();
  }
  renderItem = ({item}) => {
    return (
      <Card
        data={item}
        onPress={() =>
          this.props.navigation.navigate('AudioDetail', {data: item})
        }
      />
      // <View style={styles.renderContainer}>
      //   <TouchableOpacity
      //     style={styles.renderContainer}
      //     onPress={() =>
      //       this.props.navigation.navigate('AudioDetail', {data: item})
      //     }>
      //     <View style={styles.imageContainer}>
      //       <Image style={styles.image} source={{uri: item.artworkUrl100}} />
      //     </View>
      //     <View style={{flex: 0.7, justifyContent: 'space-around'}}>
      //       <Text style={styles.collectionTxt}>{item.collectionName}</Text>
      //       <View style={{flexDirection: 'row'}}>
      //         <Text style={styles.artistTxt}>{item.artistName}</Text>
      //         <Text style={styles.durationTxt}>
      //           {this.millisToMinutesAndSeconds(item.trackTimeMillis)}m
      //         </Text>
      //       </View>
      //     </View>
      //   </TouchableOpacity>
      // </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        {!this.props.loading ? (
          <View>
            <ActivityIndicator
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
              size="large"
            />
          </View>
        ) : (
          <FlatList
            // data={this.props.audioList}
            data={this.state.audioState}
            renderItem={(item) => this.renderItem(item)}
            keyExtractor={(item) => item.trackId.toString()}
            // keyExtractor={(item) => item.trackId}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refresh}
                onRefresh={this.onPullDown}
              />
            }
          />
        )}
      </View>
    );
  }
}
