import TaskItem from "./TaskItem";
// eslint-disable-next-line no-unused-vars
import EditTaskForm from "./EditTaskForm";

const TaskList = ({ tasks }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <li
                    key={task.id}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "10px",
                        borderBottom: "1px solid grey",
                        gap: "10px"
                    }}
                >
                    <TaskItem
                        task={task}
                    />
                </li>
            ))}
        </ul>
    );
};

export default TaskList;