import React, { useState } from 'react';
import { View, TextInput, Text, ScrollView, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

type Qualification = {
  qualification: string;
  collegeName: string;
  yearSession: string;
};

const AddQualificationComponent = () => {
  const [qualifications, setQualifications] = useState<Qualification[]>([]);
  const [currentQualification, setCurrentQualification] = useState<Qualification>({
    qualification: '',
    collegeName: '',
    yearSession: ''
  });
  const [isAdding, setIsAdding] = useState<boolean>(false);

  const handleAddQualification = () => {
    const { qualification, collegeName, yearSession } = currentQualification;
    if (qualification && collegeName && yearSession) {
      setQualifications([...qualifications, currentQualification]);
      setCurrentQualification({
        qualification: '',
        collegeName: '',
        yearSession: ''
      });
      setIsAdding(false);
    }
  };

  return (
    <ScrollView style={tw`p-4 m-4 bg-[#d7ecf1] rounded-lg`}>
      <View style={tw`flex-row justify-between items-center mb-4`}>
        <Text style={tw`text-lg text-[#000000]`}>Education</Text>
        <TouchableOpacity onPress={() => setIsAdding(!isAdding)} style={tw`bg-[#d7ecf1] p-2 rounded`}>
          <Text style={tw`text-[#054bff] text-center`}>{isAdding ? 'Cancel' : 'Add'}</Text>
        </TouchableOpacity>
      </View>

      <Text style={tw`text-base text-[#12234b]`}>B.Tech/B.E Electrical and Electronics</Text>
      <Text style={tw`text-[13px] text-[#434b62]`}>DMI College Of Engineering, Chennai</Text>
      <Text style={tw`text-[12px]`}>2014-2018   ・Full Time</Text>
      <View style={tw`border-b border-gray-300 my-6` } />
      <Text style={tw`text-base text-[#12234b]`}>Higher Secondary</Text>
      <Text style={tw`text-[13px] text-[#434b62]`}>Govt Boys Higher Sec School</Text>
      <Text style={tw`text-[12px]`}>2014</Text>
      <View style={tw`border-b border-gray-300 my-6`} />
      <Text style={tw`text-base text-[#12234b]`}>Secondary</Text>
      <Text style={tw`text-[13px] text-[#434b62]`}>Govt Boys Higher Sec School</Text>
      <Text style={tw`text-[12px]`}>2012  </Text>
     
      {qualifications.map((qual, index) => (
        <View key={index} style={tw`mb-4`}>
          <Text style={tw`text-base text-[#12234b]`}>{qual.qualification}</Text>
          <Text style={tw`text-base text-[#434b62]`}>{qual.collegeName}</Text>
          <Text style={tw`text-small`}>{qual.yearSession}</Text>
          {index < qualifications.length - 1 && <View style={tw`border-b border-gray-300 my-4`} />}
        </View>
      ))}

      {isAdding && (
        <View style={tw`mb-4`}>
          <TextInput
            placeholder="Qualification"
            value={currentQualification.qualification}
            onChangeText={(text) => setCurrentQualification({ ...currentQualification, qualification: text })}
            style={tw`text-base border p-2 mb-2`}
          />
          <TextInput
            placeholder="College Name"
            value={currentQualification.collegeName}
            onChangeText={(text) => setCurrentQualification({ ...currentQualification, collegeName: text })}
            style={tw`text-base border p-2 mb-2`}
          />
          <TextInput
            placeholder="Year Session"
            value={currentQualification.yearSession}
            onChangeText={(text) => setCurrentQualification({ ...currentQualification, yearSession: text })}
            style={tw`text-base border p-2 mb-2`}
          />
          <TouchableOpacity onPress={handleAddQualification} style={tw` p-2 rounded`}>
            <Text style={tw`text-blue-500 text-center`}>Add</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

export default AddQualificationComponent;
