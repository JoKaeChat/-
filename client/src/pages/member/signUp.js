import s from "../../styles/Wikidoc.module.css";
import MainLayout from "../../components/mainLayout";

function SignUp(){

    return(
        <MainLayout>
        <div>
            
            <div className={`{${s.header} ${s.loginTitle}` }>
                <div className={`${s.headerContainer}  `}>
                        <h1 className={`${s.title}`}>계정 만들기</h1>
                </div>
            </div>      
                
            <form className={s.loginBody}>   
              <div className={s.loginBodyContainer}>
                    <div className={s.loginInput}>
                        <lable for ={s.email}>이메일</lable>
                        <input type="text" className={s.email}></input>
                        <label for ={s.name}>이름</label>
                        <input type="password" className={s.name}></input>
                        

                        <label for ={s.password}>비밀번호</label>
                        <input type="password" className={s.password}></input>
                    </div>

                
                    <div className={s.loginBtn}>
                        
                        <button>인증</button>
                    </div>
              </div>
            </form> 
        </div>

    </MainLayout>
    );
}

export default SignUp;

