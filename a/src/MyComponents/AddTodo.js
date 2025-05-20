import React, { useState } from 'react';

const AddTodo = (props) => {
  // useState hooks to manage title and description input fields
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // Form submission handler
  const submit = (e) => {
    e.preventDefault(); // Prevents page reload on submit

    // Validation: Check if either field is empty
    if (!title || !desc) {
      alert("Title or Description cannot be blank");
    } else {
      props.addTodo(title, desc); // Call addTodo passed via props
      setTitle(""); // Reset title input
      setDesc("");  // Reset description input
    }
  };

  return (
    <div className="container my-4">
      {/* Bootstrap Card for better structure */}
      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="card-title mb-4 text-center text-primary">Add a New Todo</h3>

          {/* Form with Bootstrap grid */}
          <form onSubmit={submit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter todo title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="desc" className="form-label">Description</label>
              <input
                type="text"
                className="form-control"
                id="desc"
                placeholder="Enter description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>

            {/* Submit button */}
            <div className="text-center">
              <button type="submit" className="btn btn-success btn-sm w-50">
                Add Todo
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
