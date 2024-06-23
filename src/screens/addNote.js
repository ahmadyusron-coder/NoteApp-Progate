import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomButton from '../components/customButton';
import CustomTextInput from '../components/customTextInput';

const AddNote = ({ setCurrentPage, addNote }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  return (
    <View style={styles.container}>
      <CustomTextInput
        label="Title"
        text={title}
        onChange={setTitle}
      />
      <CustomTextInput
        label="Description"
        text={desc}
        onChange={setDesc}
        multiline={true}
        numberOfLines={4}
      />
      <CustomButton
        backgroundColor="#247881"
        color="white"
        text="Simpan"
        width="100%"
        onPress={() => {
          addNote(title, desc);
          setCurrentPage('home');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
  },
});

export default AddNote;