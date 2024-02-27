import { FC } from "react";
import cn from './header.module.css'
import Navigate from "../Navigate/Navigate";
import Basket from "../Basket/Basket";
const Header: FC = () => {
    return (
        <header className={cn.header}>
            <Navigate />
            <Basket />
        </header>
    )
}

export default Header