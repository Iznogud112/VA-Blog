import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";

import DataEntry from "./components/Pages/DataEntry/DataEntry";
import TextForSite from "./components/Pages/TextForSite/TextForSite";
import QRCode from "./components/Pages/QRCode/QRCode";
import Advertising from "./components/Pages/Advertising/Advertising";
import SocialMedia from "./components/Pages/SocialMedia/SocialMedia";
import HumanResources from "./components/Pages/HumanResources/HumanResources";
import BiznisIdeas from "./components/Pages/BusinessIdeas/BusinessIdeas";
import EventsOrganization from "./components/Pages/EventsOrganization/EventsOrganization";
import TeamBuilding from "./components/Pages/TeamBuilding/TeamBuilding";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/dataentry" element={<DataEntry />} />
        <Route path="/textforsite" element={<TextForSite />} />
        <Route path="/qrcode" element={<QRCode />} />
        <Route path="/advertising" element={<Advertising />} />
        <Route path="/socialmedia" element={<SocialMedia />} />
        <Route path="/humanresources" element={<HumanResources />} />
        <Route path="/biznisideas" element={<BiznisIdeas />} />
        <Route path="/eventsorganization" element={<EventsOrganization />} />
        <Route path="/teambuilding" element={<TeamBuilding />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
