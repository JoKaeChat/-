import s from "../styles/Header.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {useNavigate} from "react-router-dom";


function Header(){

  const [text,setText] = useState('');
  const movePage = useNavigate();

  const handleChange = (e) => {
    setText(e.nativeEvent.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    movePage(`/w/${text}`);
  }

  const handleClick = (e) => {
    e.preventDefault();
    movePage(`/w/${text}`);
  }

    return(
        <header>
        <div className={s.header}>
          <nav className={s.headerContainer}>
            <ul>
                <li> <a href ='/'>멋사위키</a></li>
                <li> 메뉴 1</li>
                <li> 메뉴 2</li>
            </ul>

            <form className={s.searchBar} onSubmit={handleSubmit}>
                <input type="text" placeholder="Search" onChange= {handleChange}></input>
                <button><FontAwesomeIcon icon={faMagnifyingGlass} onClick={handleClick} /></button>
            </form>
           </nav>
        </div>
      </header>
    )
}

export default Header;