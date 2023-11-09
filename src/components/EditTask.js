import React, { useState, useEffect } from 'react';

const EditTask = ({ task, onUpdate, onCancel }) => {
  const [editedText, setEditedText] = useState(task.text);
  const [editedDay, setEditedDay] = useState(task.day);

  useEffect(() => {
    setEditedText(task.text);
    setEditedDay(task.day);
  }, [task]);

  const onSubmit = (e) => {
    e.preventDefault();
    onUpdate({ id: task.id, text: editedText, day: editedDay });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Edit Task"
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Edit Day and Time"
        value={editedDay}
        onChange={(e) => setEditedDay(e.target.value)}
      />
      <button type="submit">Save Changes</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default EditTask;
