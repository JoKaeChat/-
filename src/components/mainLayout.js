import Header from "./Header";
import Footer from "./Footer";
import s from "../styles/mainLayout.module.css";
import { Link } from "react-router-dom";

function MainLayout(props) {

  


  return (
    <div>
      <Header />

      <div className={s.bgcccc}>
        <div className={s.container}>
          <div className={s.body}>{props.children}</div>

          <div className={s.change}>
            <h3 className={s.changeTitle}>최근 변경</h3>
            <ul>
              <li>
                <Link to={"#"}>제목</Link> <div>[수정 시각]</div>
              </li>
              <li>
                <Link to={"#"}>제목</Link> <div>[수정 시각]</div>
              </li>
              <li>
                <Link to={"#"}>제목</Link> <div>[수정 시각]</div>
              </li>
              <li className={s.more}>
                <Link to={"#"}>[더보기]</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default MainLayout;
