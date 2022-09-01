import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AnimateRoutes from "./components/routes";

export const App = () => {
  return (
    <Router>
   <AnimateRoutes></AnimateRoutes>
    </Router>
  );
};
