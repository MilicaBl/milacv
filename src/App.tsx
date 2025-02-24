import React from "react";
import { HashRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import About from "./components/About";
import MyJourney from "./components/MyJourney";
import Navigation from "./components//Navigation";
import Gif from "./components/Gif";
import Project from "./components/Project";

const App = () => {
  return (
    <Router>
      <div className="App">
        <PageContent />
      </div>
    </Router>
  );
};

const PageContent = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isProjectPage = location.pathname.startsWith("/project/");

  return (
    <>
      {/* Rendera Header och Navigation endast på startsidan */}
      {isHomePage && (
        <>
          <Navigation />
          <Header />
        </>
      )}

      <main>
        {isHomePage && (
          <>
            <About />
            <Projects />
            <Skills />
            <MyJourney />
            <Gif />
          </>
        )}
        <Routes>
          <Route path="/" element={<div />} /> {/* Behåller `/` kompatibel */}
          {isProjectPage && <Route path="/project/:id" element={<Project />} />}
        </Routes>
      </main>

      {/* Rendera Footer på alla sidor */}
      <Footer />
    </>
  );
};

export default App;