import React, { useState } from "react";

const TaskItem = ({ task, onDelete, onToggle, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({
    ...task,
  });

  const handleSave = () => {
    onUpdate(editedTask);
    setIsEditing(false);
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTask.title}
            onChange={(e) =>
              setEditedTask({ ...editedTask, title: e.target.value })
            }
          />
          <input
            type="date"
            value={editedTask.date}
            onChange={(e) =>
              setEditedTask({ ...editedTask, date: e.target.value })
            }
          />
          <input
            type="time"
            value={editedTask.time}
            onChange={(e) =>
              setEditedTask({ ...editedTask, time: e.target.value })
            }
          />
          <button onClick={handleSave}>💾 Save</button>
        </>
      ) : (
        <>
          <div>
            <h3>{task.title}</h3>
            <p>
              📅 {task.date || "No date"} ⏰ {task.time || "No time"}
            </p>
          </div>
          <button onClick={() => onToggle(task.id)}>
            {task.completed ? "↩️ Undo" : "✅ Done"}
          </button>
          <button onClick={() => setIsEditing(true)}>✏️ Edit</button>
          <button onClick={() => onDelete(task.id)}>🗑️ Delete</button>
        </>
      )}
    </div>
  );
};

export default TaskItem;
