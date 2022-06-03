import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import ProjectPage from "./pages/Project";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import ErrorPage from "./pages/error";
import PasswordForgetPage from "./pages/PasswordForget";
import ConfirmPasswordPage from "./pages/PasswordForget/ConfirmPassword";
import CreateProject from "./pages/Project";
import Primary from "./pages/Primary";
import Profile from "./pages/Profile"
import Cloud from "./pages/Cloud"

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/error" element={< ErrorPage/>}></Route>
        <Route path="/project" element={<ProjectPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/passwordforget" element={<PasswordForgetPage />}></Route>
        <Route path="/confirmpassword" element={<ConfirmPasswordPage />}></Route>
        <Route path="/createproject" element={<CreateProject />}></Route>
        <Route path="/primary" element={<Primary />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/cloud" element={<Cloud />}></Route>
      </Routes>
    </Router>
  );
};
