import React, { useState } from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa';
import EditTask from './EditTask';

const Task = ({ task, onDelete, onToggle, onEdit, onUpdate }) => {
  const [editing, setEditing] = useState(false);

  const handleEditToggle = () => {
    setEditing(!editing);
  };

  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      {editing ? (
        <EditTask task={task} onUpdate={onUpdate} onCancel={handleEditToggle} />
      ) : (
        <>
          <h3>
            {task.text} 
            <FaTimes style={{ color: 'red', cursor: 'pointer',
             marginLeft: '230px' }} onClick={() => onDelete(task.id)} />

            <FaEdit style={{ color: 'blue', cursor: 'pointer', 
            marginLeft: '5px' }} onClick={handleEditToggle} />
          </h3>
          <p>{task.day}</p>
        </>
      )}
    </div>
  );
};

export default Task;


