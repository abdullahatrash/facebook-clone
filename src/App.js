import React from "react";
import "./App.css";
import Header from "./component/Header";
import SideBar from "./component/SideBar";
import Feed from "./component/Feed";

function App() {
  return (
    //BEM
    <div className="app">
      <Header />
      <div className="app__body">
        <SideBar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
