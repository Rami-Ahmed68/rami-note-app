import { createContext, useState, useEffect } from "react";

// createing a context
export const NoteContext = createContext();

// createing the note Provider
export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState(
    JSON.parse(window.localStorage.getItem("rami-note-app")) || []
  );

  useEffect(() => {
    window.localStorage.setItem("rami-note-app", JSON.stringify(notes));
  }, [notes]);

  // createing a new note method
  const AddNote = (noteData) => {
    // to use to generate date
    const date = new Date();

    setNotes([
      ...notes,
      {
        id: notes.length,
        status: "",
        title: noteData.title,
        description: noteData.description,
        created_at: `${date.getFullYear()}-${
          date.getMonth() + 1
        }-${date.getDay()}`,
      },
    ]);
  };

  // deleteing the note by id
  const DeleteNote = (note_id) => {
    // deleteing the note by id
    const updated = notes.filter((note) => note.id !== note_id);

    // updateing the notes after delete the selected note
    setNotes(updated);

    // save the notes in localStorage
    window.localStorage.setItem("rami-note-app", JSON.stringify(notes));
  };

  // clear all notes
  const ClearAllNotes = () => {
    // emptying the notes array
    setNotes([]);

    // deleteing the notes from localStorage
    window.localStorage.removeItem("rami-note-app");
  };

  // changing the note status
  const ChangeStatus = (note_id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === note_id
          ? {
              ...note,
              status: note.status === "important" ? "normal" : "important",
            }
          : note
      )
    );
  };

  // get note by id
  const GetNote = (note_id) => {
     const note = notes.find((note) => note.id === Number(note_id));
     return note;
  };

    // update the note method
const UpdateNote = (note_id, updatedData) => {
  setNotes((prevNotes) =>
    prevNotes.map((note) =>
      note.id === note_id
        ? {
            ...note,
            title: updatedData.title,
            description: updatedData.description,
            created_at: updatedData.created_at,
          }
        : note
    )
  );
};

  const value = {
    notes,
    AddNote,
    DeleteNote,
    ClearAllNotes,
    ChangeStatus,
    GetNote,
    UpdateNote
  };

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
};
