import React from "react";

type TProps = {
    children: React.ReactNode,
};

const Button: React.FC = ({ children, ...props }: TProps): JSX.Element =>
    (
        <button
            {...props}
        >
            {children}
        </button>
    )

export default Button;