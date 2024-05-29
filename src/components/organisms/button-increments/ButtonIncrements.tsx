import React from "react";
import CounterText from "@/components/molecules/counter-text/CounterText";
import ButtonText from "@/components/molecules/button-text/ButtonText";

type TProps = {
    index: number,
    increment: Function,
    decrement: Function
};

const ButtonIncrement = ({index, increment, decrement}: TProps): JSX.Element => {
    return (
        <>
            <CounterText counter={index}/>
            <ButtonText onClick={increment}>increment</ButtonText>
            <ButtonText onClick={decrement}>decrement</ButtonText>
        </>
    );
};

export default ButtonIncrement;