import React, { useState } from "react";
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Menu from "./Components/MenuSection";
import AppDownload from "./Components/AppDownload";
import ReserveTable from "./Pages/ReserveTable";
import News from "./Components/News";
import { AnimatePresence } from 'framer-motion';
import StoreContextProvider from "./Context/StoreContext";
import Login from "./Pages/Login";
import Address from "./Pages/Address";
 import { ToastContainer, toast } from 'react-toastify';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/blog' element={<News />} />
        <Route path='/app' element={<AppDownload />} />
        <Route path='/booking' element={<ReserveTable />} />
        <Route path='/address' element={<Address />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <StoreContextProvider>

      {/* 🔥 Login Modal */}
      {showLogin ? <Login setShowLogin={setShowLogin} />:<></>}

      {/* Navbar */}
      <Navbar setShowLogin={setShowLogin} />

      {/* Pages */}
      <AnimatedRoutes />

      {/* Footer */}
      <Footer />

    </StoreContextProvider>
  );
};

export default App;