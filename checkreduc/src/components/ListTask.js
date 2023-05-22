// ListTask.js
import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
  const tasks = useSelector((state) => state.todos);

  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          description={task.description}
          isDone={task.isDone}
        />
      ))}
    </div>
  );
};

export default ListTask;
