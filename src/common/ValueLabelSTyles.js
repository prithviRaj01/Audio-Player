/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const DashboardStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#4cbbe9',
    shadowRadius: 2,
    elevation: 5,
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    shadowOpacity: 1.0,
  },
  leftContainer: {
    flex: 0.5,
    padding: 10,
  },
  rightContainer: {
    flex: 0.5,
    alignItems: 'flex-end',
    padding: 10,
  },
  textContainer: {
    paddingVertical: 2,
  },
  textValue: {
    fontSize: 20,
  },
  textLabel: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'white',
    textAlign: 'center',
    // backgroundColor: 'white',
  },
});

export default DashboardStyles;
