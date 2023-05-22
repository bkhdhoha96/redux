// Task.js
import React from 'react';

const Task = ({ id, description, isDone }) => {
  return (
    <div>
      <h3>{description}</h3>
      <p>ID: {id}</p>
      <p>Is Done: {isDone ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default Task;
