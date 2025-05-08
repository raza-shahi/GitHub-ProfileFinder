import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ResultsPage from "./pages/ResultsPage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
