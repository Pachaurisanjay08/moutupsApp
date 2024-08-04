import React, { useState, useRef } from 'react';
import { View, PanResponder, Animated, StyleSheet, Text } from 'react-native';

const CustomSlider = ({ minValue, maxValue, value, onValueChange }) => {
  const [sliderWidth, setSliderWidth] = useState(300);
  const animatedValue = useRef(new Animated.Value(value)).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gestureState) => {
      const newValue = Math.max(minValue, Math.min(maxValue, (gestureState.dx / sliderWidth) * (maxValue - minValue) + minValue));
      animatedValue.setValue(newValue);
      onValueChange(newValue);
    },
    onPanResponderRelease: () => {
      animatedValue.flattenOffset();
    }
  });

  const handleLayout = (event) => {
    setSliderWidth(event.nativeEvent.layout.width);
  };

  return (
    <View style={styles.container} onLayout={handleLayout}>
      <View style={styles.slider}>
        <Animated.View
          style={[
            styles.thumb,
            { transform: [{ translateX: animatedValue }] }
          ]}
          {...panResponder.panHandlers}
        />
      </View>
      <Text style={styles.valueText}>₹{Math.round(animatedValue.__getValue())}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  slider: {
    width: '100%',
    height: 20,
    backgroundColor: '#ddd',
    borderRadius: 10,
    position: 'relative',
  },
  thumb: {
    width: 20,
    height: 20,
    backgroundColor: '#007bff',
    borderRadius: 10,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  valueText: {
    marginTop: 10,
  },
});

export default CustomSlider;
