import s from "../styles/Header.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

function Header(){
    return(
        <header>
        <div className={s.header}>
          <nav className={s.headerContainer}>
            <ul>
                <li> <a href ='/'>멋사위키</a></li>
                <li> 메뉴 1</li>
                <li> 메뉴 2</li>
            </ul>

            <form className={s.searchBar}>
                <input type="text" placeholder="Search"></input>
                <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </form>
           </nav>
        </div>
      </header>
    )
}

export default Header;