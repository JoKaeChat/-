import s from "../../styles/Wikidoc.module.css";
import MainLayout from "../../components/mainLayout";

export default function ChangePW() {
  return (
    <MainLayout>
      <div>
        <div className={s.header}>
          <div className={s.headerContainer}>
            <h1 className={s.title}>비밀번호 변경</h1>
          </div>
        </div>

        <form className={s.loginBody}>
          <div className={s.loginBodyContainer}>
            <div className={s.loginInput}>
              <lable for={s.username}>
                바꾸고자 하는 비밀번호를 입력해주세요
              </lable>
              <input type="text" className={s.email}></input>
            </div>

            <div className={s.loginBtn}>
              <button>바꾸기</button>
            </div>
          </div>
        </form>
      </div>
    </MainLayout>
  );
}
