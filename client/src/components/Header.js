import s from "./Header.module.css";


function Header(){
    return(
        <div className={s.header}>
            <ul>
                <li> <a href ='/'>멋사위키</a></li>
                <li> 메뉴 1</li>
                <li> 메뉴 2</li>
            </ul>

            <div>검색창</div>
        </div>
    )
}

export default Header;