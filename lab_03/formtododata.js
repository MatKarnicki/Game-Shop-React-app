import { useState } from "react";

export default function FormToDoData(){
    return(
        <>
            <Input label="Wpisz date"/> 
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
    