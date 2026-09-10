import { Plus } from "lucide-react";
import { useState } from "react";

const TaskForm = ({ addTask }) => {

    const [newTask, setNewTask] = useState("");
    const [newPriority, setNewPriority] = useState(1);

    const handleSubmit = () => {
        // check if the input is not just whitespace
        if (newTask.trim()) {
            // call the addTask function witha new task object
            addTask({
                id: Date.now(), // use current timestamp as a unique ID
                text: newTask, // task description entered by the user
                priority: newPriority, // user-defined priority (number)
                done: false // new tasks start as not completed
            })
            // clear the input fields after submitting
            setNewTask("") // reset task text input to empty
            setNewPriority(1) // reset priority input to default value
        }
    }

    const inputStyle = {
        padding: "8px",
        border: "1px solid grey",
        borderRadius: "5px"
    }

    return (
        <div>
            <div style={{ display: "flex", gap: "10px" }}>
                <input
                    type="text"
                    placeholder="Add new task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    style={{
                        ...inputStyle,
                        flexGrow: 1
                    }}
                />
                <input
                    type="number"
                    min="1"
                    value={newPriority}
                    onChange={(e) => setNewPriority(Number(e.target.value))}
                    style={{
                        ...inputStyle,
                        width: "3.75rem"
                    }}
                />
            </div>
            <button
                onClick={handleSubmit}
                style={{
                    display: "block",
                    margin: "20px auto 0",
                    borderRadius: "50%",
                    backgroundColor: "blue",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    padding: "12px"
                }}
            >
                <Plus size={20} />
            </button>
        </div>

    )
}

export default TaskForm;