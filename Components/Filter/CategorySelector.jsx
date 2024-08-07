import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const categories = [
  { name: 'Development & IT', id: 1 },
  { name: 'Design & Art', id: 2 },
  { name: 'Marketing', id: 3 },
  { name: 'Finance', id: 4 },
  { name: 'Engineering', id: 5 },
];

const CategorySelector = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handlePress = (id) => {
    if (selectedCategories.includes(id)) {
      setSelectedCategories(selectedCategories.filter(categoryId => categoryId !== id));
    } else {
      setSelectedCategories([...selectedCategories, id]);
    }
  };

  return (
    <View style={tw`p-4`}>
      <Text style={tw`text-lg mb-4`}>Categories</Text>
      <View style={tw`flex-row flex-wrap `}>
        {categories.map((category) => {
          const isSelected = selectedCategories.includes(category.id);
          return (
            <TouchableOpacity
              key={category.id}
              onPress={() => handlePress(category.id)}
              style={[
                tw`m-2 px-4 py-2 rounded-full`,
                isSelected ? tw`bg-[#017390]` : tw`bg-[#d7ecf1]`,
              ]}
            >
              <Text
                style={[
                  tw`text-sm`,
                  isSelected ? tw`text-white` : tw`text-black`,
                ]}
              >
                 {isSelected ? <Text style={tw`text-white`}>✔︎</Text> : '+ '}
                {category.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default CategorySelector;
