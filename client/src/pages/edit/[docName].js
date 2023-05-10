import s from "../../styles/Wikidoc.module.css";
import MainLayout from "../../components/mainLayout";

function WikiDocEdit(){
    return(
        <MainLayout>
          <div className={s.header}>
          <div className={s.headerContainer}>
            <h1 className={s.title}>[문서이름] (새 문서 생성)</h1>
            <div className={s.buttonContainer}>
              <button id={s.buttonFirst}></button>
              <button id={s.red}>삭제</button>
              <button id={s.buttonLast}>이동</button>
            </div>
          </div>

          </div>
          
          <div className={s.body}>
          
            <div className={s.flex} >
              <textarea className ={s.textarea}/>  
            </div> 
            <div className={s.saveBtnContainer}>
             <button className={s.saveBtn}>저장</button>
            </div>

          </div>
        </MainLayout>
    )
}

export default WikiDocEdit;