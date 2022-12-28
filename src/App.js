import LoginButton from "./components/Login/Login";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { gapi } from "gapi-script";
import "./app.css";

import AuthorPage from "./pages/AuthorPage/AuthorPage";
import Card from "./pages/Card/Card";
import BookViewer from "./pages/BookViewer/BookViewer";

const client_id =
  "778513930561-lp2v2hq2taq7m47bcocq6el2pa1jkkcq.apps.googleusercontent.com";

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: client_id,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  // to use token with axios
  // var accessToken = gapi.auth.getToken().access_token;

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginButton />} />
          <Route path="authorpage" element={<AuthorPage />} />
          <Route path="authorpage/cardpage" element={<Card />} />
          <Route
            path="authorpage/cardpage/embeddedviewer"
            element={<BookViewer />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
