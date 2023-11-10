const FormToDoTime = ({handleTimeChange}) => {
    return <>
    <label>Your todo time (in seconds) </label>
    <input type="number" onChange={handleTimeChange} required></input>
    </>;
};

export default FormToDoTime;