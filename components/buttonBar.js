import React, {useState, useEffect} from 'react';
import {View, Button, StyleSheet} from 'react-native';

const ButtonBar = ({move}) => {
  return (
    <View style={styles.view}>
      <Button title={'1'} style={styles.button} onPress={() => move()} />
      <Button title={'2'} style={styles.button} />
      <Button title={'3'} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    borderRadius: 20,
  },
});

export default ButtonBar;