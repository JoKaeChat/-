import MainLayout from "../../components/mainLayout";
import s from "../../styles/Wikidoc.module.css";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function WikiDocHistory() {
  const { title } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `http://54.180.147.24:3001/api/history/${title}`,
          {
            method: "GET",
            // headers: {
            //   "Content-Type": "application/json",
            // },
          }
        );
        if (response) {
          const record = await response.json();
          console.log("record:", record);
          if (record === undefined) {
            setData("db empty");
            return;
          }

          setData(record);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchPost();
  },[title]);

  if (data) {
    console.log("data:", data);
  }
  return (
    <MainLayout>
      <div>
        <div className={s.header}>
          <div className={s.headerContainer}>
            <h1 className={s.title}>{title} (문서 역사)</h1>

            <div>
              <div className={s.buttonContainer}>
                <Link to={"/edit/" + { title }.title} className={s.buttonFirst}>
                  편집
                </Link>
                <Link to={"/history/" + { title }.title} className={s.buttonLast}>
                  문서 역사
                </Link>
              </div>
              <div className={`${s.time} ${s.timeFormat} `}>{data?.created_at}</div>
            </div>
          </div>
        </div>

        <div className={s.body}>
                <ul className={s.historyList}>
                  {
                    data.map((history,index) => (
                      <li key={index}>
                          {history?.created_at} {history?.id} 
                          <Link to={`/w/${title}/${history.id}`}>보기</Link>
                      </li>
                    ))
                  }
                </ul>
        </div>

      </div>
    </MainLayout>
  );
}

export default WikiDocHistory;
