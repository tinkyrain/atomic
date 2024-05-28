import React from "react";

import Text from '@/components/atoms/text/Text'

type TProps = {
    counter: number
};

const CounterText: React.FC = ({counter}: TProps): JSX.Element => (
    <div>
        <Text>
            { counter }
        </Text>
    </div>
);

export default CounterText;