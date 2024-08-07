import React, { useState, useRef } from 'react';
import { View, Text, PanResponder, Animated, StyleSheet } from 'react-native';
import tailwind from 'twrnc';

const SalarySlider = () => {
  const [salary, setSalary] = useState(5000);
  const minSalary = 5000;
  const maxSalary = 100000;

  const pan = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const sliderWidth = 200;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [null, { dx: pan.x }],
        {
          useNativeDriver: false,
          listener: (event, gestureState) => {
            const newSalary = Math.round(
              minSalary + ((gestureState.moveX / sliderWidth) * (maxSalary - minSalary))
            );
            setSalary(newSalary);
          },
        }
      ),
      onPanResponderRelease: (e, gestureState) => {
        const newSalary = Math.round(
          minSalary + ((gestureState.moveX / sliderWidth) * (maxSalary - minSalary))
        );
        setSalary(newSalary);
      },
    })
  ).current;

  const thumbPosition = pan.x.interpolate({
    inputRange: [0, sliderWidth],
    outputRange: [0, sliderWidth],
    extrapolate: 'clamp',
  });

  return (
    <View style={tailwind`p-4`}>
      <Text style={tailwind`text-lg mb-4`}>Salary</Text>
      <View style={tailwind`flex-row justify-between`}>
        <Text style={tailwind`text-gray-700`}>₹{minSalary}</Text>
        <Text style={tailwind`text-gray-700`}>₹{maxSalary}</Text>
      </View>
      <View style={tailwind`my-4`}>
        <View style={styles.sliderTrack} />
        <Animated.View
          style={[
            styles.sliderFill,
            {
              width: thumbPosition,
            },
          ]}
        /> 
        <Animated.View
          {...panResponder.panHandlers}
          style={[
            tailwind` h-8 -mt-4 w-8  bg-[#017390]  rounded-full`,
            {
              transform: [{ translateX: thumbPosition }],
            },
          ]}> 
      </Animated.View>
      </View>
      <View style={tailwind`items-center`}>
        <View style={tailwind`bg-gray-200 rounded-md p-2`}>
          <Text style={tailwind`text-gray-700 mt-7`}>₹{salary}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderTrack: {
    height: 1,
    backgroundColor: '#d1d5db', // Tailwind's gray-300
  },
  sliderFill: {
    height: 1,
    backgroundColor: '#017390', // Tailwind's blue-500
  },
});

export default SalarySlider;
