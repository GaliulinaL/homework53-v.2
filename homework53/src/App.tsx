import {useState} from 'react';
import './App.css';
import AddTaskForm from './components/AddTaskForm';
import Task from './components/Task';

type TaskType = {
    id: string;
    text: string;
    done: boolean;
};

const App = () => {
    const [tasks, setTasks] = useState<TaskType[]>([
        {id: '1', text: 'Prepare pilaf', done: false},
        {id: '2', text: 'Buy a dress', done: false},
        {id: '3', text: 'Turn in all homework', done: false}
    ]);

    const [input, setInput] = useState('');

    const addTask = () => {
        if (input.trim() === '') return;

        const newTask: TaskType = {
            id: Math.random().toString(),
            text: input,
            done: false
        };

        setTasks([...tasks, newTask]);
        setInput('');
    };

    const deleteTask = (id: string) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const toggleTask = (id: string) => {
        setTasks(
            tasks.map(task =>
                task.id === id ? {...task, done: !task.done} : task
            )
        );
    };

    return (
        <div className="app">
            <AddTaskForm input={input} setInput={setInput} addTask={addTask}/>

            {tasks.map(task => (
                <Task
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    toggleTask={toggleTask}
                />
            ))}
        </div>
    );
};

export default App;