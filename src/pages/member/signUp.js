import s from "../../styles/Wikidoc.module.css";
import MainLayout from "../../components/mainLayout";
// import { useState } from "react";
import { useRef } from "react";
function SignUp() {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const pwRef = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const reqData = {
      name: nameRef.current.value,
      password: pwRef.current.value,
      email: emailRef.current.value,
    };
    fetch("http://localhost:3001/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqData),
    })
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <MainLayout>
      <div>
        <div className={`{${s.header} ${s.loginTitle}`}>
          <div className={`${s.headerContainer}  `}>
            <h1 className={`${s.title}`}>계정 만들기</h1>
          </div>
        </div>

        <form className={s.loginBody} onSubmit={handleSubmit}>
          <div className={s.loginBodyContainer}>
            <div className={s.loginInput}>
              <label for={s.email}>이메일</label>
              <input type="text" className={s.email} ref={emailRef}></input>
              <label for={s.name}>이름</label>
              <input type="password" className={s.name} ref={nameRef}></input>
              <label for={s.password}>비밀번호</label>
              <input type="password" className={s.password} ref={pwRef}></input>
            </div>

            <div className={s.loginBtn}>
              <button className={s.loginBtn} type="submit">
                인증
              </button>
            </div>
          </div>
        </form>
      </div>
    </MainLayout>
  );
}

export default SignUp;
