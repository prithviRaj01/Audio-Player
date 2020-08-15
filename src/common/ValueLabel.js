import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './ValueLabelSTyles';

export const ValueLabel = ({value, label}) => {
  ValueLabel.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string,
  };

  return (
    <View style={styles.textContainer}>
      <Text
        maxLength={2}
        ellipsizeMode="tail"
        numberOfLines={1}
        style={styles.textValue}>
        {value}
      </Text>
      <Text ellipsizeMode="tail" numberOfLines={1} style={styles.textLabel}>
        {label}
      </Text>
    </View>
  );
};
