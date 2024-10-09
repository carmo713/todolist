// src/App.js
import React, { useState } from 'react';
import TaskList from './components/TaskList';
import CreateTask from './components/CreateTask';

const App = () => {
    const [tasks, setTasks] = useState([]);

    // Atualiza a lista de tarefas quando uma nova é criada
    const handleTaskCreated = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    return (
        <div className="App">
            <h1>To-Do List</h1>
            <CreateTask onTaskCreated={handleTaskCreated} />
            <TaskList tasks={tasks} />
        </div>
    );
};

export default App;
