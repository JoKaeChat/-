import s from "../styles/Wikidoc.module.css";
import MainLayout from "../components/mainLayout";
import { useParams } from "react-router";
import {Link,useNavigate} from 'react-router-dom';

export default function Delete(){

    const {title} = useParams();
    const movePage = useNavigate();

    const handleDelete = (event) => {
        event.preventDefault();
        alert("삭제되었습니다.");
        movePage(`/`);
    }


    return(
        <MainLayout>
        <div>
            
            <div className={s.header}>
                <div className={s.headerContainer}>
                    <h1 className={s.title}>삭제</h1>
                </div>
            </div>  
                
            <form className={s.loginBody}>   
                <div className={s.loginBodyContainer}>
                <div className={s.loginInput}>
                    <lable for ={s.username}><span>경고! 삭제한 내용은 다시 복구할 수 없습니다. 삭제하시겠습니까?</span></lable>
                </div>
                
                <div className={`${s.loginBtn} ${s.deleteBtn}`}>
                    <button onClick={handleDelete}  id={s.red} className={s.delete}>삭제</button>
                    <Link to={`/w/${title}`}>취소</Link>
                </div>
                </div>
            </form> 
        </div>

    </MainLayout>
    );
}