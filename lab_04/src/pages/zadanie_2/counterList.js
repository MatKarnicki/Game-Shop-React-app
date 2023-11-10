const CounterList = ({counterList}) => {
    return (
        <ul>
            {counterList.map((counter, i) => (
                <li key={i}>{`${counter.counterName}: ${counter.value} changing by: ${counter.changeValue}`}</li>
            ))}
        </ul>
    );
};

export default CounterList;