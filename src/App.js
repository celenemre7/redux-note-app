import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import FilterInput from './components/FilterInput';
import './App.css';



const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>NotesApp</h1>
        <FilterInput />
        <NoteForm />
        <NoteList />
      </div>
    </Provider>
  );
};

export default App;
