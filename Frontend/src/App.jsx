import React, { useEffect, useState } from "react";
import {Routes, Route, useLocation,Navigate } from "react-router-dom";

import "./App.css"

import Playground from "./Components/global/playground"
import ClickSpark from "./Components/global/cursor"

import Navbar from "./Components/Navigations/navbar"
import Footer from "./Components/Navigations/footer/footer"

import Home from "./pages/home"
import AboutUs from "./pages/aboutUs"
import Program from "./pages/program"
import HowItWorks from "./pages/howItWorks"
import ContactUs from "./pages/contactUs"


import Dashboard from "./Components/dashboard/CMSDashboard"
import AdminLogin from "./Components/dashboard/adminLogin"
import ScrollTop from "./Components/dashboard/scrollTop"

import Testing from "./testing"

// import Loader from "./Components/Loader";


function App() {

  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 600);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const location = useLocation();

  const isAdmin = location.pathname === "/adminDashboard" || location.pathname === "/adminLogin";

  const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/adminLogin" />;
  };

  // if (loading) {
  //   return (
  //     <div
  //       className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-all duration-700 ease-in-out
  //         ${fadeOut ? "opacity-0 scale-90 pointer-events-none" : "opacity-100 scale-100"}`}
  //     >
  //       <Loader />
  //     </div>
  //   );
  // }

  return (
    <>
          {!isAdmin && <Navbar />}
          {!isAdmin && <ScrollTop />}
          <ClickSpark 
            sparkColor='blue'
            sparkSize={10}
            sparkRadius={16}
            sparkCount={8} 
            duration={300}
            class="z-30 relative"
          >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/testing" element={<Testing />} />

            <Route path="/about" element={<AboutUs />} />
            <Route path="/programs" element={<Program />} />
            <Route path="/how-it-works" element={<HowItWorks/>} />
            <Route path="/contact" element={<ContactUs/>} />
            <Route path="/play" element={<Playground/>}/>
            <Route path="/adminLogin" element={<AdminLogin />} />
            <Route path="/adminDashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
          </Routes>
          {!isAdmin && <Footer />}
      </ClickSpark>      
    </>
  )
}
export default App
