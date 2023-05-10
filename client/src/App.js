import { BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import Main from './pages/Main';
import WikiDoc from "./pages/w/[docName]";
import WikiDocEdit from "./pages/edit/[docName]";
import WikiDocHistory from "./pages/history/[docName]";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/history/:title">{<WikiDocHistory/>}</Route>
        <Route path ="/edit/:title">{<WikiDocEdit/>}</Route>
        <Route path = "/w/:title"> {<WikiDoc/>} </Route>
        <Route path = "/"> { <Main/>} </Route>

      </Switch>
    </Router>
  );
}

export default App;
