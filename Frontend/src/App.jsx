import React from "react";
import './App.css'
import Navbar from './Components/Navbar';
import { Route,Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Menu from "./Components/MenuSection";
import AppDownload from "./Components/AppDownload";
import ReserveTable from "./Pages/ReserveTable";
import News from "./Components/News";
import {AnimatePresence} from 'framer-motion'
import StoreContextProvider from "./Context/StoreContext";

const App = () => {

  return (
    <>
    <StoreContextProvider>
    <Navbar/>
    <AnimatePresence mode="wait">
     <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/blog' element={<News/>} />
        <Route path='/app' element={<AppDownload/>} />
        <Route path='/booking' element={<ReserveTable/>} />
    </Routes>
    </AnimatePresence>
    <Footer/>
    </StoreContextProvider>
    </>
  )
}

export default App
