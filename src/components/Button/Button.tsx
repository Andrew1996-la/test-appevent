import React, { FC } from "react";
import cn from './button.module.css';

interface IButton {
    children: string,
    callback?: () => void,
}
const Button: FC<IButton> = ({children, callback}) => {
    return (
        <button className={cn.button} onClick={callback}>{children}</button>
    )
}

export default Button