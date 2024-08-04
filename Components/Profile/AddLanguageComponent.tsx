import React, { useState } from 'react';
import { View, TextInput, Text, ScrollView, TouchableOpacity } from 'react-native';
import tw from 'twrnc';




type Language = {
  language: string;
  description: string;
};

const AddLanguageComponent = () => {
  const [languages, setLanguages] = useState<Language[]>([]);
  const [currentLanguage, setCurrentLanguage] = useState<Language>({
    language: '',
    description: ''
  });
  const [isAdding, setIsAdding] = useState<boolean>(false);

  const handleAddLanguage = () => {
    const { language, description } = currentLanguage;
    if (language && description) {
      setLanguages([...languages, currentLanguage]);
      setCurrentLanguage({
        language: '',
        description: ''
      });
      setIsAdding(false);
    }
  };

  return (
    <ScrollView style={tw`p-4 bg-[#d7ecf1] m-4 rounded-lg`}>
      <View style={tw`flex-row justify-between items-center mb-4`}>
        <Text style={tw`text-lg text-[#000000]`}>Languages</Text>
        <TouchableOpacity onPress={() => setIsAdding(!isAdding)} >
        <Text style={tw`text-[#054bff] text-center`}>{isAdding ? 'Cancel' : 'Add'}</Text>
        </TouchableOpacity>
      </View>
      <Text style={tw`text-base text-[#12234b]`}>English</Text>
          <Text style={tw`text-base text-[#8a94a3] my-2`}>Read, Write, Speak</Text>
      {languages.map((lang, index) => (
        <View key={index} style={tw`mb-4`}>
          <Text style={tw`text-base text-[#12234b]`}>{lang.language}</Text>
          <Text style={tw`text-base text-[#8a94a3]`}>{lang.description}</Text>
          {index < languages.length - 1 && <View style={tw`border-b border-gray-300 my-4`} />}
        </View>
      ))}

      {isAdding && (
        <View style={tw`mb-4`}>
          <TextInput
            placeholder="Language"
            value={currentLanguage.language}
            onChangeText={(text) => setCurrentLanguage({ ...currentLanguage, language: text })}
            style={tw`text-base border p-2 mb-2`}
          />
          <TextInput
            placeholder="Description (e.g., Read, Write, Speak)"
            value={currentLanguage.description}
            onChangeText={(text) => setCurrentLanguage({ ...currentLanguage, description: text })}
            style={tw`text-base border p-2 mb-2`}
          />
          <TouchableOpacity onPress={handleAddLanguage} style={tw`bg-blue-500 p-2 rounded`}>
            <Text style={tw`text-white text-center`}>Add Language</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

export default AddLanguageComponent;
