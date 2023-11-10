import FormToDoDate from "./FormToDoDate";
import FormToDoItem from "./FormToDoItem";
import FormToDoMesseges from "./FormToDoMesseges";
import FormToDoTime from "./FormToDoTime";
import { useState } from "react";
import FormSearchBar from "./FormSearchBar";

const ToDoForm = ({handleAddTask, handleSearch}) => {

    const [taskDate, setDate] = useState();
    const [taskText, setText] = useState();
    const [search, setSearch] = useState();
    const [taskTime, setTime] = useState();
    const [errorList, addError] = useState([]);

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleTextChange = (event) => {
        setText(event.target.value);
    };
    const handleSearchBar = (event) => {
        setSearch(event.target.value);
    };
    const handleError = (msg) => {
        addError([...errorList, msg]);
    };
    const clearError = () => {
        addError([]);
    };
    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };
    const handleSearchResult = () => {
        if(!search && !(search === "TODO" || search === "EXPIRED" || search === "DONE")){
            handleError("Wpisz poprawne search query");
        } else {
            handleSearch(search);
        }

    };
    const handleOnClick = () => {
        if(!(taskText && taskDate && taskTime)){
            handleError("Prosze uzupelnic formularz");
        } else if(new Date() > new Date(taskDate)){
            handleError("Termin upłynął, ustaw to później");
        } else{
            handleAddTask(taskText, taskDate, taskTime);
            clearError();
        }
    };
    return(
        <>
        <FormToDoItem handleTextChange={handleTextChange}></FormToDoItem>
        <p/>
        <FormToDoTime handleTimeChange={handleTimeChange}></FormToDoTime>
        <p/>
        <FormToDoDate handleDateChange={handleDateChange}></FormToDoDate>
        <p/>
        <FormToDoMesseges errorList={errorList}></FormToDoMesseges>
        <p/>
        <input type="submit" onClick={handleOnClick}></input>
        <p/>
        <FormSearchBar handleSearchBar={handleSearchBar}></FormSearchBar>
        <input type="submit" onClick={handleSearchResult}></input>
        </>
    );
};
export default ToDoForm;