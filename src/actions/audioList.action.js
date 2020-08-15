export const AUDIO_LIST_REQUEST = 'AUDIO_LIST_REQUEST';
export const AUDIO_LIST_SUCCESS = 'AUDIO_LIST_SUCCESS';
export const AUDIO_LIST_FAILURE = 'AUDIO_LIST_FAILURE';

export function audioListRequest() {
  return {
    type: AUDIO_LIST_REQUEST,
  };
}

export function audioListSuccess(audioList) {
  return {
    type: AUDIO_LIST_SUCCESS,
    audioList,
  };
}

export function audioListFailure(error) {
  return {
    type: AUDIO_LIST_FAILURE,
    error,
  };
}

export const getAudioList = () => {
  return async (dispatch) => {
    dispatch(audioListRequest());
    fetch(`https://itunes.apple.com/search?term=Michael+jackson`, {
      method: 'GET',
    })
      .then((res) =>
        res.json().then((data) => {
          dispatch(audioListSuccess(data.results));
        }),
      )
      .catch((err) => dispatch(audioListFailure(err)));
  };
};
export default getAudioList;
