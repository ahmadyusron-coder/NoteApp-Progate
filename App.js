import React, { useState } from 'react';
import Home from './src/screens/home';
import AddNote from './src/screens/addNote';
import EditNote from './src/screens/editNote';

const CurrentPageWidget = ({ currentPage, noteList, setCurrentPage, addNote, deleteNote, editNote, currentNote, setCurrentNote }) => {
  switch (currentPage) {
    case 'home':
      return <Home noteList={noteList} setCurrentPage={setCurrentPage} deleteNote={deleteNote} setCurrentNote={setCurrentNote} />;
    case 'add':
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case 'edit':
      return <EditNote setCurrentPage={setCurrentPage} editNote={editNote} currentNote={currentNote} />;
    default:
      return <Home />;
  }
};

const App = () => {
  const [noteList, setNoteList] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');
  const [currentNote, setCurrentNote] = useState(null);

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    setNoteList([
      ...noteList,
      {
        id,
        title,
        desc,
      },
    ]);
  };

  const deleteNote = (id) => {
    setNoteList(noteList.filter(note => note.id !== id));
  };

  const editNote = (id, title, desc) => {
    setNoteList(noteList.map(note => (note.id === id ? { id, title, desc } : note)));
  };

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      noteList={noteList}
      setCurrentPage={setCurrentPage}
      addNote={addNote}
      deleteNote={deleteNote}
      editNote={editNote}
      currentNote={currentNote}
      setCurrentNote={setCurrentNote}
    />
  );
};

export default App;