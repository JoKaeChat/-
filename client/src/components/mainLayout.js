import Header from "./Header";
import Footer from "./Footer";
import s from "../styles/mainLayout.module.css";

function MainLayout(props){
    return(
        <div>
            <Header/>
            <div className={s.container}>
            {props.children}
            </div>
            <Footer/>
        </div>
    )

}
export default MainLayout;