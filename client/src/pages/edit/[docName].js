import s from "../../styles/Wikidoc.module.css";
import MainLayout from "../../components/mainLayout";


function WikiDocEdit(){
    return(
        <MainLayout>
          <div className={s.header}>
          <div className={s.headerContainer}>
            <h1 className={s.title}>[문서이름] (새 문서 생성)</h1>
            <div className={s.buttonContainer}>
              <button id={s.buttonFirst}>역링크</button>
              <button id={s.red}>삭제</button>
              <button id={s.buttonLast}>이동</button>
            </div>
          </div>

          </div>
          
          <div className={s.flex}>
            <textarea className ={s.textarea}/>  
          </div> 
            <button>저장</button>

        </MainLayout>
    )
}

export default WikiDocEdit;