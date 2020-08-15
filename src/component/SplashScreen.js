import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

class SplashScreen extends React.Component {
  render() {
    const viewStyles = [styles.container, {backgroundColor: 'orange'}];
    const textStyles = {
      color: 'white',
      fontSize: 40,
      fontWeight: 'bold',
    };

    return (
      <View style={viewStyles}>
        <Image
          source={{uri: 'https://www.crownstack.com/images/logo.png'}}
          style={{resizeMode: 'center', height: 140, width: 140}}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default SplashScreen;
