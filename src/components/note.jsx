import React from "react";

function Note(props) {
  function handleClick(e) {
    props.onDelete(props.id); // note.jsx represents a single "Note"
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
