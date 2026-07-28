import React, { useState } from "react";
import Form from "./components/form";
import Note from "./components/note";

const App = () => {

  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prev) => [...prev, newNote]);
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <Form addNote={addNote} />

      <Note notes={notes} />

    </div>
  );
};

export default App;