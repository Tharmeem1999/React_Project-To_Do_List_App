import TaskItem from "./TaskItem";
import EditTaskForm from "./EditTaskForm";

const TaskList = () => {
    return (
        <div>
            <ul>
                <li>task 1</li>
                <li>task 2</li>
                <li>task 3</li>
            </ul>
            <TaskItem />
            <EditTaskForm />
        </div>

    );
};

export default TaskList;