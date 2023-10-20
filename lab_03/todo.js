import {useState} from "react";

export default function ToDoItems(){
    const [id, setId] = useState(0);
    const [todo, setTodo] = useState([]);

    function handleAddTodo(title, date){
        setTodo(todo => [...todo, {title: title, date: date}]);  
        setId(id => id + 1);
    }
}