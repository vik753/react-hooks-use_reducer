import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Notes from "./components/Notes";
import NoteState from "./contexts/NoteState";
import Navbar from "./components/Navbar";
import About from "./components/About";
import NoteList from "./components/NoteList";

function App() {
  return (
    <BrowserRouter>
      <NoteState>
      <Navbar />
      <div className="container mt-5">

        <Switch>
          <Route path="/addNote" component={Notes} />
          <Route path="/about" component={About} />
          <Route path="/" exact component={NoteList} />
        </Switch>

      </div>
      </NoteState>
    </BrowserRouter>
  );
}

export default App;
