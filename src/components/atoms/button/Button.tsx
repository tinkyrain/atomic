import React from "react";

type TProps = {
    children: React.ReactNode,
};

const Button = ({ children, ...props }: TProps): JSX.Element =>
    (
        <button
            {...props}
        >
            {children}
        </button>
    )

export default Button;