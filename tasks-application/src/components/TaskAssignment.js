import React, { useState } from 'react';

const TaskAssignment = ({ tasks, assignTask }) => {
  const [selectedTaskId, setSelectedTaskId] = useState('');
  const [assignee, setAssignee] = useState('');

  const handleTaskSelection = (e) => {
    setSelectedTaskId(e.target.value);
  };

  const handleAssigneeChange = (e) => {
    setAssignee(e.target.value);
  };

  const handleAssignTask = () => {
    if (selectedTaskId && assignee.trim() !== '') {
      assignTask(parseInt(selectedTaskId), assignee);
      setSelectedTaskId('');
      setAssignee('');
    }
  };

  return (
    <div className="task-assignment">
      <h2>Task Assignment</h2>
      <select value={selectedTaskId} onChange={handleTaskSelection}>
        <option value="">Select Task</option>
        {tasks.map(task => (
          <option key={task.id} value={task.id}>{task.title}</option>
        ))}
      </select>
      <input type="text" value={assignee} onChange={handleAssigneeChange} placeholder="Assignee" />
      <button onClick={handleAssignTask}>Assign Task</button>
    </div>
  );
};

export default TaskAssignment;
