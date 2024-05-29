import React from "react";

import Text from '@/components/atoms/text/Text'

type TProps = {
    counter: number
};

const CounterText = ({counter}: TProps): JSX.Element => (
    <div>
        <Text>
            <span>{counter}</span>
        </Text>
    </div>
);

export default CounterText;