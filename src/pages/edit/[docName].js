import s from "../../styles/Wikidoc.module.css";
import MainLayout from "../../components/mainLayout";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

function WikiDocEdit() {
  const { title } = useParams("");
  const { content, setContent } = useState("");
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/bbs/${title}`, {
          method: "GET",
        });
        if (response.ok) {
          const data = await response.json();
          setContent(data.content);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchPost();
  }, [title]);
  const submithandler = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/post/${title}`, {
        method: "POST",
      });
      if (response.ok) {
        console.log("bbs inserted");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <MainLayout>
      <div className={s.header}>
        <div className={s.headerContainer}>
          <h1 className={s.title}>[문서이름] (문서 편집)</h1>
          <div className={s.buttonContainer}>
            <a id={s.red}>삭제</a>
            <a className={s.buttonLast}>이동</a>
          </div>
        </div>
      </div>

      <div className={s.body}>
        <div className={s.flex}>
          <textarea className={s.textarea} />
        </div>
        <div className={s.saveBtnContainer}>
          <button className={s.saveBtn}>저장</button>
        </div>
      </div>
    </MainLayout>
  );
}

export default WikiDocEdit;
