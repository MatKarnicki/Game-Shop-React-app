import { useState } from "react";

export default function FormToDoItem(){
    return(
        <>
            <Input label="Wpisz tresc zadania do zrobienia"/> 
        </>
    );
    }
    function Input({ label }) {
        const [text, setText] = useState('')
    

    function handleTextChange(e) {
        setText(e.target.value);
      }
    
    return (
    <label>
        {label}
        {' '}
        <input
            value={text}
            onChange={handleTextChange}
        />
        </label>
      );
    }
    