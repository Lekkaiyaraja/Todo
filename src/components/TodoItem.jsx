// src/components/TodoItem.js
import React, { useState } from 'react';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.task);
  const [description, setDescription] = useState(todo.description);
  const [status, setStatus] = useState(todo.status);

  const handleUpdate = () => {
    updateTodo({
      ...todo,
      task,
      description,
      status
    });
    setIsEditing(false);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    updateTodo({
      ...todo,
      status: e.target.value
    });
  };

  return (
    <div className="todo-card">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{todo.task}</h3>
          <p>{todo.description}</p>
          <div>
            <label>Status: </label>
            <select value={status} onChange={handleStatusChange}>
              <option value="notCompleted">Not Completed</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
