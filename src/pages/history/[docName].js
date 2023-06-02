import MainLayout from "../../components/mainLayout";
import s from "../../styles/Wikidoc.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
function WikiDocHistory() {
  const { title } = useParams();
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/history/${title}`,
          {
            method: "GET",
            credential: "include",
          }
        );
        if (response.ok) {
          const data = await response.json();
          //console.log(data);

          setList(data);
        } else {
          console.log("문서만들기 버튼 보이게 구현");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchPost();
  }, [title]);
  // if (!list) {
  //   return (
  //     <div>
  //       <h2>이 문서는 편집 역사가 없습니다.</h2>
  //     </div>
  //   );
  // }
  console.log(list);
  return (
    <MainLayout>
      <div>
        <div className={s.header}>
          <div className={s.headerContainer}>
            <h1 className={s.title}>[{title}] (문서 역사)</h1>

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
              <div className={s.time}>최근 수정 시각</div>
            </div>
          </div>
        </div>

        <ul className={s.historyList}>
          <li>
            [문서 생성 시간]{list[0].created_at}:[버전 이름] <a>보기</a>
          </li>
          <li>
            [문서 생성 시간][버전 이름] <a>보기</a>
          </li>
          <li>
            [문서 생성 시간][버전 이름] <a>보기</a>
          </li>
        </ul>
      </div>
    </MainLayout>
  );
}

export default WikiDocHistory;
