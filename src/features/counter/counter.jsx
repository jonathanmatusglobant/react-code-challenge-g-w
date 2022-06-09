import { useState } from 'react';
import CounterButton from './counterButton';

export default function Counter() {
    const [counter, setCounter] = useState(0);

    const incrementCounterHandler = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };

    return (
        <>
            <h1>{counter}</h1>
            <CounterButton incrementCounter={incrementCounterHandler} />
        </>
    );
}
