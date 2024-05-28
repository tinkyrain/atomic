import {useState} from "react";

export const useCounter = (initialState: number) => {
    const [index, setIndex] = useState(initialState);
    const increment = () => setIndex(index + 1);
    const decrement = () => setIndex(index - 1);

    return {
        increment,
        decrement,
        index
    };
}