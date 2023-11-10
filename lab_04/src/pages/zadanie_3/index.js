import { useReducer } from "react";
import ToDoForm from "./ToDoForm";
import todoReducer from "./todoReducer";


const ToDoItems = () => {
    const [state, dispatch] = useReducer(todoReducer, []);
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
    return (
    <>
    <h1>TO-DO</h1>
    <ul>
        {state.map((task, i) => (<li key={i}>{`${task.text} ${task.date} ${task.status}`}</li>))}
    </ul>
    <ToDoForm handleAddTask={handleAddTask} handleSearch={handleSearch}></ToDoForm>
    </>
    );
};
export default ToDoItems;