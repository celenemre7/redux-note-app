import React from 'react';
import { useSelector } from 'react-redux';

const NoteList = () => {
  const notes = useSelector((state) => state.notes); 
  const filter = useSelector((state) => state.filter);
  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {filteredNotes.map((note, index) => (
        <div key={index} style={{ backgroundColor: note.color, padding: '10px', margin: '5px' }}>
          {note.text}
        </div>
      ))}
    </div>
  );
};

export default NoteList;
