import React from "react";
import ButtonIncrements from "@/components/organisms/button-increments/ButtonIncrements";
import {useCounter} from "@/hooks/counter-hook";

export const Counter: React.FC = (): JSX.Element => {

    const { index, increment, decrement } = useCounter(0);

    return (
        <ButtonIncrements
            index={index}
            increment={increment}
            decrement={decrement}
        />
    );
};