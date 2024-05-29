import React from "react";

import Text from '@/components/atoms/text/Text'

type TProps = {
    children: React.ReactNode
};

const CounterText = ({children, ...props}: TProps): JSX.Element => (
    <div>
        <Text>
            <span {...props}>
                {children}
            </span>
        </Text>
    </div>
);

export default CounterText;