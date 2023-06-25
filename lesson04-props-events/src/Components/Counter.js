import {useState} from "react" ;
const Counter = () => {
    const [count , setCount] = useState (0);
    // let count = 0 ;
    // const onDecreaseHandler = () => {
    //     const newValue = count - 1
    //     setCount(newValue);
    // }
    // const onIncreaseHandler = () => {
    //     const newValue = count + 1;
    //     setCount (newValue);
        
    // }
    const onCounterHandler = (value) => () => {
        const newValue = count + value
        setCount(newValue);

    }
    return(
        <div>
            <h1> Counter Example</h1>
            <button onClick = { onCounterHandler(-1)}>Decrease (-)</button>
            <span> {count} </span>
            <button onClick = { onCounterHandler(1) }>Increase (+)</button>
        </div>
    )
};
export default Counter;