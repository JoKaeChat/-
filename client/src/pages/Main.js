import MainLayout from "../components/mainLayout";
import s from "../styles/Wikidoc.module.css";

function Main(){
    return(
       
        <MainLayout>
      <div>

        <div className={s.header}>
          <div className={s.headerContainer}>

            <h1 className={s.title}>멋사위키 대문</h1>

            <div className={s.buttonContainer}>
              <button id={s.buttonFirst}>편집</button>
              
              <button>토론</button>
              <button id={s.buttonLast}>문서 역사</button>
            </div>

          </div>

        </div>
          
        <div className={s.body}>
          <div>멋사 위키에 오신 걸 환영합니다~</div>
        </div>

      </div>
        </MainLayout>
        
    )
}

export default Main;