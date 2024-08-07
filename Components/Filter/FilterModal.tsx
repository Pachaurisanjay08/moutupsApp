import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';



import CategorySelector from './CategorySelector'
import JobType from './JobType';
import SalarySlider from './SalarySlider';

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
          <View style={tw`bg-white p-4 rounded-t-3xl`}>
          <Text style={tw`text-[#12234B] text-lg font-bold`}>Filter</Text>
          <CategorySelector/>
          <JobType/>
          <SalarySlider/>
            <TouchableOpacity onPress={handleApply} style={tw`bg-[#017390] p-2 w-70 mx-auto rounded-full mb-2`}>
              <Text style={tw`text-white text-center`}>Apply Filters</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleReset} style={tw`bg-[#d7ecf1] p-2 w-70 mx-auto rounded-full`}>
              <Text style={tw`text-[#12234b] text-center`}>Reset Filters</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };
  
  export default FilterModal;