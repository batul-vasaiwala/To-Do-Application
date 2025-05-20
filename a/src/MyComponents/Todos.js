import React from 'react';
import TodoItem from '../MyComponents/TodoItem';

const Todos = (props) => {
  return (
    <div className="container my-4">
      {/* Card wrapper for styling */}
      <div className="card shadow-sm">
        <div className="card-body">
          <h4 className="card-title text-center text-primary mb-4">To Do List</h4>

          {/* Conditional rendering: show message if no todos */}
          {props.todos.length === 0 ? (
            <p className="text-muted text-center">No Todos to Display</p>
          ) : (
            // Mapping through todos and rendering each TodoItem
            props.todos.map((todo) => {
              return (
                <div key={todo.sno}>
                  <TodoItem todo={todo} onDelete={props.onDelete} />
                  <hr /> {/* Separator between todos */}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Todos;
