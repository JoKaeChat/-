import s from "./Header.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

function Header(){
    return(
        <div className={s.header}>
            <ul>
                <li> <a href ='/'>멋사위키</a></li>
                <li> 메뉴 1</li>
                <li> 메뉴 2</li>
            </ul>

            <div>
            <input type="text" placeholder="Search"></input>
            <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </div>
        </div>
    )
}

export default Header;