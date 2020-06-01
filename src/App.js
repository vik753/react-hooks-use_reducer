import React from "react";
import { NavLink, Link, BrowserRouter, Route, Switch } from "react-router-dom";
import Notes from "./components/Notes";
import NoteState from "./contexts/NoteState";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <NoteState>
      <Navbar />
      <div className="container mt-5">

        <Switch>
          <Route path="/" exact component={Notes} />
        </Switch>

      </div>
      </NoteState>
    </BrowserRouter>
  );
}

export default App;
