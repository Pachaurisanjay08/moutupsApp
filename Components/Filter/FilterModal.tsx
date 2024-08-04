import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import CheckBox from '@react-native-community/checkbox'
import Slider from '@react-native-community/slider'; // Import Slider from @react-native-community/slider
import CustomCheckbox from './CustomCheckbox';
import CustomSlider from './CustomSlider';


const FilterModal = ({ visible, onClose, onApply, onReset }) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedJobTypes, setSelectedJobTypes] = useState({});
    const [salaryRange, setSalaryRange] = useState([50000, 100000]);
  
    const categories = ['Development', 'Engineering', 'Finance'];
    const jobTypes = ['Full time', 'Part time'];
    
    const handleCategoryPress = (category) => {
        setCheckedCategories({
          ...checkedCategories,
          [category]: !checkedCategories[category],
        });
      };
      const handleJobTypePress = (type) => {
        setCheckedJobTypes({
          ...checkedJobTypes,
          [type]: !checkedJobTypes[type],
        });
      };
    

    const handleJobTypeChange = (jobType) => {
      setSelectedJobTypes(prevState => ({
        ...prevState,
        [jobType]: !prevState[jobType]
      }));
    };
  
    const handleApply = () => {
      onApply({
        selectedCategory,
        selectedJobTypes,
        salaryRange
      });
      onClose();
    };
  
    const handleReset = () => {
      setSelectedCategory('');
      setSelectedJobTypes({});
      setSalaryRange([0, 100000]);
      onReset();
      onClose();
    };
  
    return (
      <Modal
        transparent={true}
        visible={visible}
        onRequestClose={onClose}
        animationType="slide"
      >
       
        <View style={tw`flex-1 justify-end bg-black bg-opacity-50`}>
          <View style={tw`bg-white p-4 rounded-t-lg`}>
          <Text style={tw`text-[#12234B] text-[16px] font-bold`}>Filter</Text>
          <Text style={tw`text-xl mb-2`}>Category</Text>
          {categories.map(category => (
            <TouchableOpacity
              key={category}
              onPress={() => setSelectedCategory(category)}
              style={tw`flex-row items-center mb-2`}
            >
              <View style={tw`w-5 h-5 border rounded-full ${selectedCategory === category ? 'bg-blue-500' : ''}`} />
              <Text style={tw`ml-2`}>{category}</Text>
            </TouchableOpacity>
          ))}
            <Text style={tw`text-xl mb-2 mt-4`}>Job Type</Text>
            {jobTypes.map(jobType => (
              <TouchableOpacity
                key={jobType}
                onPress={() => handleJobTypeChange(jobType)}
                style={tw`flex-row items-center mb-2`}
              >
                <CustomCheckbox
                  value={selectedJobTypes[jobType] || false}
                />
                <Text style={tw`ml-2`}>{jobType}</Text>
              </TouchableOpacity>
            ))}
            <Text style={tw`text-xl mb-2 mt-4`}>Salary Range</Text>
            <CustomSlider
              minimumValue={0}
              maximumValue={100000}
              value={salaryRange[1]}
              onValueChange={value => setSalaryRange([salaryRange[0], value])}
              style={tw`mb-4`}
            />
            <Text style={tw`text-center mb-4`}>₹{salaryRange[0]} - ₹{salaryRange[1]}</Text>
            <TouchableOpacity onPress={handleApply} style={tw`bg-[#017390] p-2 rounded-full mb-2`}>
              <Text style={tw`text-white text-center`}>Apply Filters</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleReset} style={tw`bg-[#d7ecf1] p-2 rounded-full`}>
              <Text style={tw`text-[#12234b] text-center`}>Reset Filters</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };
  
  export default FilterModal;