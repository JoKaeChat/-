import s from "../../styles/Wikidoc.module.css";
import MainLayout from "../../components/mainLayout";
import { Link } from "react-router-dom";

function Mypage() {
  return (
    <MainLayout>
      <div>
        <div className={s.header}>
          <div className={s.headerContainer}>
            <h1 className={s.title}>내 정보</h1>
          </div>
        </div>

        <ul className={`${s.mypageBody} ${s.body}`}>
          <li>사용자 이름</li>
          <li>정동구</li>
          <li>이메일</li>
          <li>
            <span>zzzjdg@naver.com</span>
          </li>
          <li>권한</li>
          <li>member</li>
          <li>비밀번호 변경</li>
          <li>
            <Link to={"/member/change_password"}>비밀번호 변경</Link>
          </li>
        </ul>

        <div className={`${s.saveBtnContainer} ${s.margin_right_10px}`}>
          <button className={s.saveBtn}>저장</button>
        </div>
      </div>
    </MainLayout>
  );
}

export default Mypage;
