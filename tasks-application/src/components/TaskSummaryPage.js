import React from 'react';

const TaskSummaryPage = ({ tasks }) => {
  // Calculate task metrics (e.g., total tasks, completed tasks, etc.)
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.status === 'completed').length;

  return (
    <div className="task-summary-page">
      <h2>Task Summary Page</h2>
      <p>Total Tasks: {totalTasks}</p>
      <p>Completed Tasks: {completedTasks}</p>
      {/* You can add more visualizations here */}
    </div>
  );
};

export default TaskSummaryPage;
