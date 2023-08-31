import "./App.css";

import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Registration from "./Registration";
import Login from "./Login";
// import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import { auth } from "./firebaseConfig";
function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    console.log(userName);
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, [userName]);

  return (
    <div>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/regi" element={<Registration />} />
          <Route path="/" element={<Login />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
