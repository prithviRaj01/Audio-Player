import {connect} from 'react-redux';
import AudioList from '../component/AudioList';
import {getAudioList} from '../actions/audioList.action';
const mapStateToProps = (state) => {
  return {
    audioList: state.audioListReducer.audioList,
    loading: state.audioListReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAudioList: () => dispatch(getAudioList()),
  };
};

const AudioListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AudioList);
export default AudioListContainer;
