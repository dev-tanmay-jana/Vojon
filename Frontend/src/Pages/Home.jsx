import React from 'react'
import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar';
import MenuSection from '../Components/MenuSection';
import ChefsSection from '../Components/ChefsSection';
import Categories from '../Components/Categories';
import About from './About';
import Testimonials from '../Components/Testimonials';
import AppDownload from '../Components/AppDownload';
import Reservation from '../Components/Reservation';
import InstagramSection from '../Components/InstagramSection';
import News from '../Components/News';

const Home = () => {
  return (
    <div className="min-h-screen">
     
      <Hero/>
      <Categories/>
      <MenuSection/>
      <Reservation/>
      <About/>
      <ChefsSection/>
      <Testimonials/>
      <News/>
      <AppDownload/>
      <InstagramSection/>
    </div>
  )
}

export default Home;
