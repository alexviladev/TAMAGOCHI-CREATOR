import React, {useRef} from 'react';
import {ImageBackground, StyleSheet, View, Image, Animated} from 'react-native';
import {tamagochiPaths, wH, wW} from '../configs/configs';

const Tamagochi = ({userTamagochi, moveAnim}) => {
  const spritePath = tamagochiPaths[userTamagochi];

  // const moveAnim = useRef(new Animated.Value(570)).current;
  // const move = () => {
  //   Animated.timing(570, {
  //     toValue: -30,
  //     duration: 3000,
  //   }).start();
  // };

  return (
    <View style={styles.view}>
      <Animated.Image
        source={spritePath}
        style={[styles.sprite, {left: moveAnim}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sprite: {
    overflow: 'visible',
    // left: 570,
    transform: [{scale: 4}],
  },
  view: {
    overflow: 'hidden',
    position: 'absolute',
    top: 300,
    left: 100,
    width: 150,
    height: 180,
    // borderWidth: 5,
  },
});

export default Tamagochi;