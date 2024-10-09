import React, { useState } from 'react';
import axios from 'axios';

const CreateTask = ({ onTaskCreated }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('pending');
    const [dueDate, setDueDate] = useState('');

    // Função para criar uma nova tarefa
    const createTask = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/tasks', {
                title,
                description,
                status,
                due_date: dueDate,
            });
            onTaskCreated(response.data); // Chama o callback após a criação
            setTitle('');
            setDescription('');
            setStatus('pending');
            setDueDate('');
        } catch (error) {
            console.error('Erro ao criar tarefa:', error);
        }
    };

    return (
        <form onSubmit={createTask}>
            <h2>Criar Nova Tarefa</h2>
            <div>
                <label>Título:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Descrição:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <label>Status:</label>
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="pending">Pendente</option>
                    <option value="in_progress">Em Progresso</option>
                    <option value="completed">Concluída</option>
                </select>
            </div>
            <div>
                <label>Prazo:</label>
                <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />
            </div>
            <button type="submit">Criar Tarefa</button>
        </form>
    );
};

export default CreateTask;
