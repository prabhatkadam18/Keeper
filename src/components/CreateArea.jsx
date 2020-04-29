import React, { useState } from "react";

export default function CreateArea(props) {
  const [objNote, setObjNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setObjNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleClick(e) {
    e.preventDefault();
    props.onAdd(objNote);
    setObjNote({
      title: "",
      content: "",
    });
  }

  return (
    <div className="add-note">
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={objNote.title}
          placeholder="Title"
          autoComplete="off"></input>
        <textarea
          name="content"
          onChange={handleChange}
          placeholder="Content"
          value={objNote.content}></textarea>
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}
