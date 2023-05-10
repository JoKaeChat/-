import MainLayout from "../components/mainLayout";
import s from "../components/mainLayout";


function Main(){
    return(
       
        <MainLayout>

        <div className={s.header}>      
        <div>멋사위키:대문</div> 
        
        </div>  

        <div> [본문]</div>

        </MainLayout>
        
    )
}

export default Main;