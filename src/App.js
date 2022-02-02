import React, { useState } from "react";
import "./App.css";
import DashBoard from "./Component/DashBoard";
import Preferences from "./Component/Preferences";
import { Routes, Route } from "react-router-dom";

import Login from "./Component/Login";
// import useToken from "./Component/token";

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="preference" element={<Preferences />} />
      </Routes>
    </div>
  );
}

export default App;
