import React from "react";
import Home from "./pages/Home";
import { Routes, Route, Link } from "react-router-dom";
import Tabs from "./components/Tabs";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Container_Home from "./components/Container_Home";
import Skils from "./pages/Skils";
import Contact from "./pages/Contact";
import Project from "./pages/Project";

function App() {
  return (
    <div className="bg-[#2b233b] h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Tabs />
          <div className="flex-1 overflow-auto p-4">
            <Routes>
              <Route path="/" element={<Container_Home />} />
              <Route path="/Skils" element={<Skils />} />
              <Route path="/project" element={< Project />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
