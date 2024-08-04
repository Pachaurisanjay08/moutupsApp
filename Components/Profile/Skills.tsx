import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import tw from 'twrnc';
import { IconButton, Card, Chip, Button } from 'react-native-paper';

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<string[]>([
    'UI Design',
    'Responsive Web Design',
    'Wireframing',
    'User Research',
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [newSkill, setNewSkill] = useState('');

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => setIsEditing(false);

  const addSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  return (
    <Card style={tw`p-4 m-4 bg-[#d7ecf1]`}>
      <View style={tw`flex-row justify-between  items-center`}>
        <Text style={tw`text-lg font-bold  ` }>Skills</Text>
        <IconButton
          icon="pencil"
          size={20}
          onPress={isEditing ? handleSave : handleEdit}
        />
      </View>
      <View style={tw`flex-row flex-wrap  mt-2`}>
        {skills.map((skill, index) => (
          <Chip
            key={index}
            style={tw`m-1`}
            onClose={isEditing ? () => removeSkill(index) : undefined}
          >
            {skill}
          </Chip>
        ))}
      </View>
      {isEditing && (
        <View style={tw`flex-row items-center  mt-4`}>
          <TextInput
            style={tw`border p-2 flex-1`}
            placeholder="Add a skill"
            value={newSkill}
            onChangeText={setNewSkill}
          />
          <Button mode="contained" onPress={addSkill} style={tw`ml-2`}>
            Add
          </Button>
        </View>
      )}
    </Card>
  );
};

export default Skills;
