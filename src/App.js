import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from 'react';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Shopping',
      day: 'June 22nd at 2:30pm',
      reminder: false,
    },
    
    {
      id: 2,
      text: 'Movie',
      day: 'July 21st at 9:30pm',
      reminder: false,
    },
    {
      id: 3,
      text: 'Exam',
      day: 'May 21st at 9am',
      reminder: false,
    }
  
  ]);

  // add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)));
  };

  // edit task
  const editTask = (editedTask) => {
    setTasks(tasks.map((task) => (task.id === editedTask.id ? { ...task, text: editedTask.text, day: editedTask.day } : task)));
  };

  // update task
  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? { ...task, text: updatedTask.text, day: updatedTask.day } : task)));
  };

  return (
    <div className="container">
      <Header showAdd={showAddTask} onAdd={() => setShowAddTask(!showAddTask)} />
      {showAddTask && <AddTask onAdd={addTask} />}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} onEdit={editTask} onUpdate={updateTask} />
      ) : (
        'No Tasks To Show.'
      )}
    </div>
  );
}

export default App;
