
import React, { useState } from 'react';
import { View, TextInput, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import Sicon from '../../assets/Sicon.png'; 
import Filterlogo from '../../assets/Filter.png'; 
import FilterModal from '../Filter/FilterModal';

const SearchBar = ({ setSearchText }:any) => {
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);

  const openFilterModal = () => {
    setFilterModalVisible(true);
  };

  const closeFilterModal = () => {
    setFilterModalVisible(false);
  };

  const handleApplyFilters = (filters:any) => {
    console.log('Applied filters:', filters);
    // Apply the filters here
    closeFilterModal();
  };

  const handleResetFilters = () => {
    console.log('Filters reset');
    // Reset filters here
    closeFilterModal();
  };


  return (
    <View style={tw`w-full h-15 bg-white flex-row px-5 py-5 `}>
      <View style={tw`flex-row text-lg bg-[#EFFCFF] rounded-lg border text-[#767E90] w-10/12 h-9 items-center`}>
        <TextInput
          style={tw`flex-1 text-[#767E90] text-base  ml-3 -py-2 my-auto` }
          placeholder="Find your Job"
          placeholderTextColor="#9a9ea6"
          autoFocus={false}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="default"
          onChangeText={(text) => setSearchText(text)}
        />
        <Image source={Sicon} style={tw`w-6 h-6 mr-2`} />
      </View>
      <TouchableOpacity onPress={openFilterModal}>
        <Image source={Filterlogo} style={tw`w-11 h-9 ml-5`} />
      </TouchableOpacity>
      <FilterModal
        visible={isFilterModalVisible}
        onClose={closeFilterModal}
        onApply={handleApplyFilters}
        onReset={handleResetFilters}
      />
    </View>
  );
};

export default SearchBar;
