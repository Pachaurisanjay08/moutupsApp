import { View, Image, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Back from "../../assets/Back.png";

const SearchPageHeader = () => {
  const handleBackPress = () => {
    console.log('Back button pressed');
  };

  return (
    <View style={tw`w-full h-20 flex-row mt-5 items-center`}>
      <TouchableOpacity onPress={handleBackPress} style={tw`ml-4 mr-2 my-2`}>
        <Image source={Back} style={tw`w-5 h-3 rounded-full`} />
      </TouchableOpacity>
      <Text style={tw`flex-1 text-lg text-center font-semibold`}>Search Jobs</Text>
    </View>
  );
};

export default SearchPageHeader;
