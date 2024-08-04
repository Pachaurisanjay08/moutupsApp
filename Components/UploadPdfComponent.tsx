import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import tw from 'twrnc';
import RNFS from 'react-native-fs';

const UploadPdfComponent: React.FC = () => {
  const [pdfUri, setPdfUri] = useState<string | null>(null);
  const [pdfName, setPdfName] = useState<string | null>(null);

  const pickDocument = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      setPdfUri(res.uri);
      setPdfName(res.name);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the picker');
      } else {
        throw err;
      }
    }
  };

  const uploadDocument = async () => {
    if (!pdfUri) {
      console.log('No PDF selected');
      return;
    }

    // Example of reading file content
    const fileContent = await RNFS.readFile(pdfUri, 'base64');
    console.log('File content (base64):', fileContent);

    // TODO: Implement the actual upload logic using your preferred method
    console.log('Upload logic to be implemented...');
  };

  return (
    <View style={tw`flex-1 justify-center items-center p-4`}>
      <TouchableOpacity
        style={tw`bg-blue-500 p-4 rounded-lg`}
        onPress={pickDocument}
      >
        <Text style={tw`text-white text-lg`}>Pick a PDF</Text>
      </TouchableOpacity>

      {pdfName && (
        <Text style={tw`mt-4 text-lg`}>Selected PDF: {pdfName}</Text>
      )}

      {pdfUri && (
        <TouchableOpacity
          style={tw`bg-green-500 p-4 rounded-lg mt-4`}
          onPress={uploadDocument}
        >
          <Text style={tw`text-white text-lg`}>Upload PDF</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default UploadPdfComponent;
