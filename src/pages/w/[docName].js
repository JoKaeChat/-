import MainLayout from "../../components/mainLayout";
import s from "../../styles/Wikidoc.module.css";
import { useParams,Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function WikiDoc() {
  const {id} = useParams();
  const { title } = useParams();
  const [post, setPost] = useState("");
  const movePage = useNavigate();
  console.log('id는 ' + id);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `http://54.180.147.24:3001/api/bbs/${title}/${id}`,
          {
            method: "GET",
            credential: "include",
          }
        );
        if (response) {
          const data = await response.json();
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
    fetchPost();
  }, [title]);

  if (post == "db empty") {
    return (
      <div>최초!</div>
    );
  } //a태그로 작성페이지로 넘겨주기
  console.log(post[0]);
  return (
    <MainLayout>
      <div>
        <div className={s.header}>
          <div className={s.headerContainer}>
            <h1 className={s.title}>{title}</h1>

            <div>
              <div className={s.buttonContainer}>
                <Link to={"/edit/" + { title }.title} className={s.buttonFirst}>
                  편집
                </Link>
                
                <Link to={"/history/" + { title }.title} className={s.buttonLast}>
                  문서 역사
                </Link>
              </div>

              <div className={`${s.time} ${s.timeFormat}`}>최근 수정 시각:{post?.created_at}</div>
            </div>
          </div>
        </div>

        <div className={s.body}>{post?.body}</div>
      </div>
    </MainLayout>
  );
}

export default WikiDoc;
