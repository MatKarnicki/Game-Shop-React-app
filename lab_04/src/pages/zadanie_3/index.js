import { useState } from "react";
import ToDoForm from "./ToDoForm";

const ToDoItems = () => {

    const [tasks, addTask] = useState([]);

    const handleAddTask = (taskText, taskDate) => {
        addTask([...tasks, `${taskText} due to : ${taskDate}`]);
    };

    return (
    <>
    <h1>TO-DO</h1>
    <ul>
        {tasks.map((task, i) => (<li key={i}>{task}</li>))}
    </ul>
    <ToDoForm handleAddTask={handleAddTask}></ToDoForm>
    </>
    );
};
export default ToDoItems;