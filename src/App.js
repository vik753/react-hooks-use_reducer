import React from "react";
import AddNote from "./components/AddNote";
import AlertState from "./contexts/Alert/AlertState";
import Alert from "./components/Alert";
import NotesState from "./contexts/Notes/NotesState";
import NotesList from "./components/NotesList";

function App() {
  return (
    <AlertState>
      <Alert />
      <div className="container mt-5">
        <NotesState>
          <AddNote />
          <NotesList />
        </NotesState>
      </div>
    </AlertState>
  );
}

export default App;
