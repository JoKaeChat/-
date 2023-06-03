import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import WikiDoc from "./pages/w/[docName]";
import WikiDocEdit from "./pages/edit/[docName]";
import WikiDocHistory from "./pages/history/[docName]";
import Login from "./pages/member/login";
import SignUp from "./pages/member/signUp";
import RecoverPassword from "./pages/member/recover";
import Mypage from "./pages/member/mypage";
import { Reset } from "styled-reset";
import * as React from "react";
import ChangePW from "./pages/member/ChangePW";
import Delete from "./pages/Delete";

function App() {
  return (
    <React.Fragment>
      <Reset />
      <Router>
        <Routes>
          <Route path="/delete/:title" element={<Delete />}></Route>
          <Route path="/history/:title" element={<WikiDocHistory />}></Route>
          <Route path="member/change_password" element={<ChangePW />}>
            {" "}
          </Route>

          <Route path="member/mypage" element={<Mypage />}></Route>
          <Route path="/member/signUp" element={<SignUp />}>
            {" "}
          </Route>
          <Route path="/member/recover" element={<RecoverPassword />}>
            {" "}
          </Route>

          <Route path="/member/login" element={<Login />}>
            {" "}
          </Route>

          <Route path="/edit/:title" element={<WikiDocEdit />}></Route>
          <Route path="/w/:title" element={<WikiDoc />}>
            {" "}
          </Route>
          <Route path="/" element={<Main />}>
            {" "}
          </Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
