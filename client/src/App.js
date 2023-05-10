import { BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Main from './pages/Main';
import WikiDoc from "./pages/w/[docName]";
import WikiDocEdit from "./pages/edit/[docName]";
import WikiDocHistory from "./pages/history/[docName]";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/history/:title" element ={<WikiDocHistory/>} ></Route>

        <Route path ="/edit/:title" element ={<WikiDocEdit/>}></Route>
        <Route path = "/w/:title" element ={<WikiDoc/>}>  </Route>
        <Route path = "/" element ={ <Main/>} >  </Route>

      </Routes>
    </Router>
  );
}

export default App;
