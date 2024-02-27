import { FC } from "react";
import cn from './navigate.module.css'
import { NavLink } from "react-router-dom";

const Navigate: FC = () => {
    return (
        <nav className={cn.nav}>
            <NavLink to="/catalog">Каталог</NavLink>
            {/*оставляю место под возможное расширение панели навигации*/}
        </nav>
    )
}

export default Navigate