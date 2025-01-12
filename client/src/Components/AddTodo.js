import React, { useState } from "react";

export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault(); // preventing page reloading
    if (!title || !desc) {
      alert("Title or Description cannot be blank!");
    } else {
      props.addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <>
      <div
        className="container my-3"
        style={{ maxWidth: "800px", minHeight: "40vh" }}
      >
        <h3>Add your Todos</h3>
        <form onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Todo Title
            </label>
            <input
              type="text"
              // important thing to be learnt and remember always
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              Todo Description
            </label>
            <input
              type="text"
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }} // e is the event
              className="form-control"
              id="desc"
            />
          </div>
          <button type="submit" className="btn btn-sm btn-success">
            Add Todo
          </button>
        </form>
      </div>
      <div className="container" style={{ maxWidth: "800px" }}>
        <hr></hr>
      </div>
    </>
  );
};
