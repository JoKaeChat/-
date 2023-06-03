import s from "../styles/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [close, setClose] = useState(false);
  const [text, setText] = useState("");
  const movePage = useNavigate();

  const clickUser = (e) => {
    e.preventDefault();
    setClose((current) => !current);
  };

  const handleChange = (e) => {
    setText(e.nativeEvent.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      return;
    }
    movePage(`/w/${text}`);
    setText("");
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (text === "") {
      return;
    }
    movePage(`/w/${text}`);
    setText("");
  };

  return (
    <header>
      <div className={s.header}>
        <nav className={s.headerContainer}>
          <div className={s.headerListContainer}>
            <ul>
              <li>
                {" "}
                <Link to={"/"}>멋사위키</Link>
              </li>
              <li> 메뉴 1</li>
              <li> 메뉴 2</li>
            </ul>
          </div>

          <div className={s.searchBarContainer}>
            <form className={s.searchBar} onSubmit={handleSubmit}>
              <input
                value={text}
                type="text"
                placeholder="Search"
                onChange={handleChange}
              ></input>
              <button>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  onClick={handleClick}
                />
              </button>
            </form>
            <button className={s.user} onClick={clickUser}>
              <FontAwesomeIcon icon={faUser}   />
            </button>
            {close && (
              <div className={s.pop}>
                <Link to={"/member/mypage"}>내 정보</Link>

                <Link to={"/member/login"}>로그인</Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
