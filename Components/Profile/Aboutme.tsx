import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { IconButton, Card } from 'react-native-paper';

const Aboutme: React.FC = () => {
  const [text, setText] = useState(
    "Hello, I am Nirmal Kumar. I have one year and 6 months experience as a designer and developer using Figma and advanced Java. I am looking for a UI/UX Designer position to make the user interface more intuitive."
  );
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => setIsEditing(false);

  return (

    <Card style={tw`p-4  m-4 bg-[#d7ecf1]` }>
      <View style={tw`flex-row  justify-between items-center`}>
        <Text style={tw`text-lg font-bold`}>About me</Text>
        <IconButton
          icon="pencil"
          size={20}
          onPress={handleEdit}
        />
      </View>
      {isEditing ? (
        <TextInput
          style={tw`border p-2 mt-2`}
          value={text}
          onChangeText={setText}
          onBlur={handleSave}
        />
      ) : (
        <Text style={tw`mt-2`}>{text}</Text>
      )}
    </Card>
    
  );
};

export default Aboutme;
