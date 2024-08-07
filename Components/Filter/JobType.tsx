import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const JobType = () => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const jobTypes = ['Full Time', 'Part Time', 'Internship'];

  const toggleJobType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  return (
    <View style={tw`p-5`}>
      <Text style={tw`text-lg`}>Job type</Text>
      <View style={tw`flex-row mt-2  text-sm`}>
        {jobTypes.map((type) => (
          <TouchableOpacity
            key={type}
            style={[
              tw`mr-2 py-2 px-4 text-sm rounded-full border border-[#d7ecf1] bg-[#d7ecf1]`,
              selectedTypes.includes(type) && tw`bg-[#017390]`,
            ]}
            onPress={() => toggleJobType(type)}
          >
            <Text
              style={[
                tw`text-sm`,
                selectedTypes.includes(type) && tw`text-white`,
              ]}
            >
              {type}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default JobType;
