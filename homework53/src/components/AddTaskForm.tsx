type Props = {
    input: string;
    setInput: (value: string) => void;
    addTask: () => void;
};

const AddTaskForm = ({input, setInput, addTask}: Props) => {
    return (
        <form
            className="form"
            onSubmit={(e) => {
                e.preventDefault();
                addTask();
            }}
        >
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="New Task"
            />

            <button type="submit">Add</button>
        </form>
    );
};

export default AddTaskForm;