import React from "react";

import { Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import NavbarNew from "./components/NavbarNew/NavbarNew";
import Footer from "./components/Footer/Footer";
import Container from "./components/pages/Container/Container";
import Pricing from "./components/pages/Pricing";
import HowItWorks from "./components/pages/HowItWorks";
import AntRishta from "./components/pages/AntRishta/AntRishta";
import ProfilePage from "./components/pages/ProfilePage/ProfilePage";
import Feedback from "./components/pages/Feedback/Feedback";
import LandingPage from "./components/pages/LandingPage/LandingPage";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import SignIn from "./components/pages/LoginForm/SignIn/SignIn";
import SignUp from "./components/pages/LoginForm/SignUp/SignUp";
import RishtaForm from "./components/pages/RishtaForm/RishtaForm";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <NavbarNew />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/rishtas" element={<Container />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/post-rishtas" element={<AntRishta />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/login-page" element={<SignIn />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/new-rishta" element={<RishtaForm />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
