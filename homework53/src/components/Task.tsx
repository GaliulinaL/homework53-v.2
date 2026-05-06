type TaskType = {
    id: string;
    text: string;
    done: boolean;
};

type Props = {
    task: TaskType;
    deleteTask: (id: string) => void;
    toggleTask: (id: string) => void;
};

const Task = ({task, deleteTask, toggleTask}: Props) => {
    return (
        <div className="task">
            <div className="task-left">
                <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => toggleTask(task.id)}
                />

                <span className={task.done ? 'done' : ''}>
          {task.text}
        </span>
            </div>

            <button
                className="delete-btn"
                onClick={() => deleteTask(task.id)}
            >
                X
            </button>
        </div>
    );
};

export default Task;