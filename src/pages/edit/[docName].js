import s from "../../styles/Wikidoc.module.css";
import MainLayout from "../../components/mainLayout";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
function WikiDocEdit() {
  const { title } = useParams("");
  const [post, setPost] = useState("");
  const bodyRef = useRef("");
  const movePage = useNavigate();
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `http://54.180.147.24:3001/api/bbs/${title}`,
          {
            method: "GET",
          }
        );
        console.log("response" + response);
        if (response) {
          const data = await response.json();
          console.log(data);
          if (data[0] === undefined) {
            setPost("db empty");
            return;
          }
          setPost(data[0]);
        }
      } catch (error) {
        console.error(error);
      }
    };
    if (post) {
      console.log(post);
    }

    fetchPost();
  }, [title]);
  const submithandler = async () => {
    const reqData = {
      body: bodyRef.current.value,
    };
    console.log(reqData);
    try {
      const response = await fetch(
        `http://54.180.147.24:3001/api/edit/${title}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reqData),
        }
      ).then((response) => {
        movePage(`/w/${title}`);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const setField = (field, value) => {
    setPost({
      ...post,
      [field]: value,
    });
  };

  return (
    <MainLayout>
      <div className={s.header}>
        <div className={s.headerContainer}>
          <h1 className={s.title}>{title}</h1>
          <div className={s.buttonContainer}>
            <Link to={`/delete/${title}`} id={s.red} className={s.buttonFirst}>
              삭제
            </Link>
            <Link to={`/w/${title}`} className={s.buttonLast}>
              돌아가기
            </Link>
          </div>
        </div>
      </div>

      <div className={s.body}>
        <div className={`${s.flex} ${s.margin_bottom_10px}`}>
          <textarea
            onChange={(e) => {
              setField("body", e.target.value);
            }}
            value={post?.body}
            className={s.textarea}
            ref={bodyRef}
          />
        </div>
        <div className={s.saveBtnContainer}>
          <button className={s.saveBtn} onClick={submithandler}>
            저장
          </button>
        </div>
      </div>
    </MainLayout>
  );
}

export default WikiDocEdit;