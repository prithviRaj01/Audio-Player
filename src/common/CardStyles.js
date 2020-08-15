import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'black',
    borderRadius: 10,
    paddingTop: 5,
  },
  image: {height: 100, width: 100, resizeMode: 'contain', borderRadius: 2},
  imageContainer: {flex: 0.3},
  collectionTxt: {
    fontSize: 18,
    color: 'white',
  },
  artistTxt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  durationTxt: {
    fontSize: 16,
    marginLeft: 20,
    color: 'white',
  },
});
export default styles;
