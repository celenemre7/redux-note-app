import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/action'; 

const NoteForm = () => {
  const [note, setNote] = useState('');
  const [color, setColor] = useState('blue');
  const dispatch = useDispatch();

  const handleAddNote = () => {
    if (note.trim() !== '') {
      dispatch(addNote({ text: note, color }));
      setNote('');
    }
  };

  return (
    <div>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Enter your note here..."
      />
      <div className="color-picker">
        {['pink', 'yellow', 'blue', 'green'].map((col) => (
          <span
            key={col}
            className={`color-button ${color === col ? 'selected' : ''}`}
            style={{ backgroundColor: col }}
            onClick={() => setColor(col)}
          />
        ))}
      </div>
      <button onClick={handleAddNote}>Add</button>
    </div>
  );
};

export default NoteForm;
