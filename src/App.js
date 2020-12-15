import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";
import AllPosts from "./components/AllPosts";
import OnePost from "./components/OnePost";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Route exact component={AllPosts} path="/" />
        <Route component={OnePost} path="/:slug" />
      </div>
    </BrowserRouter>
  );
}

export default App;
