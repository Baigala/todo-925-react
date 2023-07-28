import React, { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  //
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Taskaa bicheegui bna");
      return;
    } else {
      onAdd(text);
      setText("");
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="form-control">
        <label>Add Task</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add Task"
        />
      </div>
      <input type="submit" className="btn btn-block" value="Save Task" />
    </form>
  );
};

export default AddTask;
