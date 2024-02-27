import { FC } from "react";
import cn from './navigate.module.css'

const Navigate: FC = () => {
    return (
        <nav className={cn.nav}>
            <a href="/">Каталог</a>
            {/*оставляю место под возможное расширение панели навигации*/}
        </nav>
    )
}

export default Navigate