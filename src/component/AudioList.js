import React, {Component} from 'react';
import {View, FlatList, ActivityIndicator, RefreshControl} from 'react-native';
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

  static navigationOptions = {
    title: 'Audio List',
    headdingStyle: {
      fontWeight: '300',
    },
    headerStyle: {
      backgroundColor: '#37474F',
    },
    headerTitleStyle: {alignSelf: 'center', color: 'white'},
  };

  onPullDown = () => {
    this.setState({refresh: true});
    this.props.getAudioList();
    this.setState({refresh: false});
  };

  componentDidMount() {
    this.props.getAudioList();
  }

  renderItem = ({item}) => {
    const {navigation} = this.props;
    return (
      <Card
        data={item}
        onPress={() => navigation.navigate('AudioDetail', {data: item})}
      />
    );
  };
  render() {
    return (
      <View style={styles.container}>
        {this.props.loading ? (
          <ActivityIndicator
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            size="large"
            color="red"
          />
        ) : (
          <FlatList
            data={this.props.audioList}
            renderItem={(item) => this.renderItem(item)}
            keyExtractor={(item) => item.trackId.toString()}
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
