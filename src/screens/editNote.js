import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomButton from '../components/customButton';
import CustomTextInput from '../components/customTextInput';

const EditNote = ({ setCurrentPage, editNote, currentNote }) => {
  const [title, setTitle] = useState(currentNote?.title || '');
  const [desc, setDesc] = useState(currentNote?.desc || '');

  useEffect(() => {
    if (currentNote) {
      setTitle(currentNote.title);
      setDesc(currentNote.desc);
    }
  }, [currentNote]);

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
          editNote(currentNote.id, title, desc);
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

export default EditNote;