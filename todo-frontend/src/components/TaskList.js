import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(null);

    // Função para buscar tarefas
    const fetchTasks = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/tasks');
            setTasks(response.data); // Atualiza o estado com as tarefas
        } catch (error) {
            setError("Erro ao buscar tarefas: " + error.message);
        }
    };

    // Função para deletar uma tarefa
    const deleteTask = async (taskId) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/tasks/${taskId}`);
            // Atualiza o estado removendo a tarefa deletada
            setTasks(tasks.filter((task) => task.id !== taskId));
        } catch (error) {
            setError("Erro ao deletar tarefa: " + error.message);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div>
            <h2>Lista de Tarefas</h2>
            {error && <p>{error}</p>}
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <p>Status: {task.status}</p>
                        <p>Prazo: {task.due_date || "Sem prazo definido"}</p>
                        <button onClick={() => deleteTask(task.id)}>Deletar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
