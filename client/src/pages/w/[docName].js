import MainLayout from "../../components/mainLayout";
import s from "../../styles/Wikidoc.module.css";

function WikiDoc(){
    return(
        <MainLayout>
          <div className={s.header}>
          <div className={s.headerContainer}>
            <h1 className={s.title}>[문서이름]</h1>
            <div className={s.buttonContainer}>
              <button id={s.buttonFirst}>갱신</button>
              <button>편집</button>
              <button>왜 +만 크기 다르냐 </button>
              <button>토론</button>
              <button id={s.buttonLast}>문서 역사</button>
            </div>
          </div>

           <div className={s.time}>생성시간</div>
          </div>
          
          <div className={s.body}>[본문]</div>

        </MainLayout>

    )
}

export default WikiDoc;