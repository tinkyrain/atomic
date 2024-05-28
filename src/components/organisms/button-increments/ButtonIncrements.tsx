import React from "react";
import {useCounter} from "@/hooks/counter-hook";
import CounterText from "@/components/molecules/counter-text/CounterText";
import ButtonText from "@/components/molecules/button-text/ButtonText";



const ButtonIncrement: React.FC = (): JSX.Element => {
    const counter = useCounter(0);
    return (
        <>
            <CounterText counter={counter.index}/>
            <ButtonText onClick={counter.increment}>increment</ButtonText>
            <ButtonText onClick={counter.decrement}>decrement</ButtonText>
        </>
    );
};

export default ButtonIncrement;