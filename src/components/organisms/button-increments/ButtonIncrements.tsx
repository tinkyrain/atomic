import React from "react";
import CounterText from "@/components/molecules/counter-text/CounterText";
import ButtonText from "@/components/molecules/button-text/ButtonText";
import {useCounter} from "@/hooks/counter-hook";

const ButtonIncrement = (): JSX.Element => {

    const {index, increment, decrement} = useCounter(0);

    return (
        <>
            <CounterText>{index}</CounterText>
            <ButtonText onClick={increment}>increment</ButtonText>
            <ButtonText onClick={decrement}>decrement</ButtonText>
        </>
    );
};

export default ButtonIncrement;