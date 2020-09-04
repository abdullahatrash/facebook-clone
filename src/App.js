import React from "react";
import "./App.css";
import Header from "./component/Header";
import SideBar from "./component/SideBar";
import Feed from "./component/Feed";
import Widgets from "./component/Widgets";
import Login from "./component/Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    //BEM

    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <SideBar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
