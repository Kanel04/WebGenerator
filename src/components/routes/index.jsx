import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import {AnimatePresence} from 'framer-motion';
import { HomePage } from "../../pages/Home/index";
import ProjectPage from "../../pages/Project";
import LoginPage from "../../pages/Login";
import RegisterPage from "../../pages/Register";
import ErrorPage from "../../pages/Error";
import PasswordForgetPage from "../../pages/PasswordForget";
import ConfirmPasswordPage from "../../pages/PasswordForget/ConfirmPassword";
import CreateProject from "../../pages/Project";
import Primary from "../../pages/Primary";
import Profile from "../../pages/Profile"
import Cloud from "../../pages/Cloud"
import Modal from "../../pages/Modal"

function AnimateRoutes() {

  const location = useLocation();

  //show Modal
  const [showModal, setShowModal] = useState(true);
  

  return (
    <>
    
    <AnimatePresence>
      
      <Routes location={location} key={location.pathname}>
      <Route path="*" element={<ErrorPage/>}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/error" element={< ErrorPage />}></Route>
          <Route path="/project" element={<ProjectPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/passwordforget" element={<PasswordForgetPage />}></Route>
          <Route path="/confirmpassword" element={<ConfirmPasswordPage />}></Route>
          <Route path="/createproject" element={<CreateProject />}></Route>
          <Route path="/primary" element={<Primary />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/cloud" element={<Cloud />}></Route>
          <Route path="/modal" element={<Modal />}></Route>
      </Routes>
      </AnimatePresence>
    </>
  )
}

export default AnimateRoutes