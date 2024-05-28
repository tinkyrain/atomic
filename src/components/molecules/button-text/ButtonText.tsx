import Button from "@/components/atoms/button/Button";
import Text from "@/components/atoms/text/Text";
import React from "react";

type TProps = {
    children: React.ReactNode,
};

const ButtonText: React.FC = ({children, ...props}: TProps): JSX.Element => (
    <Button {...props}>
        <Text>{children}</Text>
    </Button>
);

export default ButtonText;