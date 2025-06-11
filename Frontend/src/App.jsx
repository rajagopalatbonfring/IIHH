import "./App.css"
import Navbar from "./Components/Navigations/navbar"
import Footer from "./Components/Navigations/footer"
import Home from "./Components/home"
import AboutUs from "./Components/aboutUs"
import Program from "./Components/program"
import HowItWorks from "./Components/howItWorks"
import WhyChooseUs from "./Components/whyChooseUs"
import Testimonial from "./Components/testimonials"
import ContactUs from "./Components/contactUs"
import ModuleDetail from "./Components/moduleDetail"

import ModuleAccordionCard from "./accordion"

import Dashboard from "./Components/CMSDashboard"
import AdminLogin from "./Components/adminLogin"

import ScrollTop from "./Components/scrollTop"

import Playground from "./Components/playground"
import ClickSpark from "./Components/cursor"

import {Routes, Route, useLocation,Navigate } from "react-router-dom";

function App() {
  const location = useLocation();

  const isAdmin = location.pathname === "/adminDashboard" || location.pathname === "/adminLogin";

  const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/adminLogin" />;
  };

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
            <Route path="/acc" element={<ModuleAccordionCard />} />

            <Route path="/about" element={<AboutUs />} />
            <Route path="/programs" element={<Program />} />
            <Route path="/module/:id" element={<ModuleDetail />} />
            <Route path="/how-it-works" element={<HowItWorks/>} />
            <Route path="/why-choose-us" element={<WhyChooseUs/>} />
            <Route path="/testimonials" element={<Testimonial/>} />
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
