import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {flex: 1, width: '100%'},
  renderContainer: {flex: 1, flexDirection: 'row', margin: 10},
  image: {height: 100, width: 100, resizeMode: 'contain'},
  imageContainer: {flex: 0.3},
  collectionTxt: {
    fontSize: 18,
  },
  artistTxt: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  durationTxt: {
    fontSize: 16,
    marginLeft: 20,
  },
});
export default styles;
