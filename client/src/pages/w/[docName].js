import MainLayout from "../../components/mainLayout";
import s from "../../styles/Wikidoc.module.css";

function WikiDoc(){
    return(
        <MainLayout>
        <div>

        <div className={s.header}>
          <div className={s.headerContainer}>
            <h1 className={s.title}>[문서이름]</h1>

            <div>
              <div className={s.buttonContainer}>
                <button id={s.buttonFirst}>편집</button>
                
                <button>토론</button>
                <button id={s.buttonLast}>문서 역사</button>
              </div>

              <div className={s.time}>
                최근 수정 시각
              </div>

            </div>

          </div>
        </div>
          
          <div className={s.body}>[본문]</div>

        </div>  
        </MainLayout>

    )
}

export default WikiDoc;