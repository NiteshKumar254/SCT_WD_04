import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete, onToggle, onUpdate }) => {
  if (tasks.length === 0) return <p>No tasks yet!</p>;

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default TaskList;
