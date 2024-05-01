import React from 'react';

const TaskStatusUpdates = ({ tasks, updateTaskStatus }) => {
  const handleStatusUpdate = (taskId, status) => {
    updateTaskStatus(taskId, status);
  };

  return (
    <div className="task-status-updates">
      <h2>Task Status Updates</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span>{task.title}</span>
            <button onClick={() => handleStatusUpdate(task.id, 'started')}>Start</button>
            <button onClick={() => handleStatusUpdate(task.id, 'completed')}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskStatusUpdates;
