import MainLayout from "../../components/mainLayout";
import s from "../../styles/Wikidoc.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function WikiDoc() {
  const { title } = useParams();
  const [post, setPost] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/bbs/${title}`, {
          method: "GET",
          credential: "include",
        });
        if (response.ok) {
          const data = await response.json();
          setPost(data);
        } else {
          console.log("문서만들기 버튼 보이게 구현");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchPost();
  }, [title]);
  if (!post) {
    return <div>Loading...</div>;
  }
  console.log(post);
  return (
    <MainLayout>
      <div>
        <div className={s.header}>
          <div className={s.headerContainer}>
            <h1 className={s.title}>{title}</h1>

            <div>
              <div className={s.buttonContainer}>
                <a href={"/edit/" + { title }.title} id={s.buttonFirst}>
                  {" "}
                  편집{" "}
                </a>
                <a>토론</a>
                <a href={"/history/" + { title }.title} id={s.buttonLast}>
                  문서 역사
                </a>
              </div>

              <div className={s.time}>최근 수정 시각:{post[0].created_at}</div>
            </div>
          </div>
        </div>

        <div className={s.body}>{post[0].body}</div>
      </div>
    </MainLayout>
  );
}

export default WikiDoc;
