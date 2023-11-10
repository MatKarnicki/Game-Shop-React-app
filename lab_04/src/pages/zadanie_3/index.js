import { useReducer } from "react";
import ToDoForm from "./ToDoForm";
import todoReducer from "./todoReducer";


const ToDoItems = () => {
    const [state, dispatch] = useReducer(todoReducer, []);
    const finishTask = (taskText) => {
        dispatch({type: 'DONE', payload: {text: taskText}});
    };
    const handleAddTask = (taskText, taskDate, taskTime) => {
        dispatch({ type: 'ADDTODO', payload: {text:`${taskText}`, date: `${taskDate}`, status: 'TODO'}});
        console.log(state);
        setTimeout(() => {
            dispatch({ type: 'EXPIRED', payload: {text:`${taskText}`}});
        }, taskTime*1000);
    };
    const handleSearch = (search) => {
        dispatch({type: "SEARCH", payload: {searchQuery: search}});
    };
    const handleSubmit = (e, taskText) => {
        e.preventDefault();
        finishTask(taskText);
    };
    return (
        <>
        <h1>TO-DO</h1>
        {state.map((task, i) => (
            <form key={i} onSubmit={(e) => handleSubmit(e, task.text)}>
                <p>{`${task.text} ${task.date} ${task.status}`}</p>
                <input type="submit" value="Zakoncz zadanie" />
            </form>
        ))}
        <ToDoForm handleAddTask={handleAddTask} handleSearch={handleSearch} />
    </>
    );
};
export default ToDoItems;