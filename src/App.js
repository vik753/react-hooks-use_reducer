import React from "react";
import Notes from "./components/Notes";
import NoteState from "./contexts/NoteState";

function App() {
  return (
    <div className="container mt-5">
      <NoteState>
        <Notes />
      </NoteState>
    </div>
  );
}

export default App;
