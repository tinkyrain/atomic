import React from "react";

type TProps = {
    children: React.ReactNode;
};

const Text = ({ children }: TProps): JSX.Element => (
    <span>
        {children}
    </span>
);

export default Text;