import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import {  FaUser } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { MdOutlineMenuBook } from "react-icons/md";
import { BiLogoBlogger } from "react-icons/bi";
import { TbDeviceTabletCheck } from "react-icons/tb";
import { FaBookReader } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoFastFood } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";


const Navbar = ({setShowLogin}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navItems = [
    { name: "Home", href: "/", icon: <IoMdHome /> },
    { name: "Menu", href: "/menu", icon: <MdOutlineMenuBook /> },
    { name: "About", href: "/about", icon: <FaBookReader /> },
    { name: "BLog", href: "/blog", icon: <BiLogoBlogger /> },
    { name: "Booking", href: "/booking", icon: <TbDeviceTabletCheck /> },
    {name:"App", href:"/app", icon:<FaDownload/>},
    { name: "MyOrder", href: "/myorder", icon: <IoFastFood /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <nav className="flex items-center justify-between h-16 px-4 max-w-7xl mx-auto">

        {/* Logo */}
        <motion.a
          href="#home"
          className="text-3xl font-bold bg-gradient-to-r from-primary to-black/95 bg-clip-text text-transparent font-display"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Vojon<span className="text-primary">.</span>
        </motion.a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                onClick={() => setActiveLink(item.name)}
                className={`font-medium transition ${
                  activeLink === item.name
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex gap-4 items-center">
          <SlBasket className="cursor-pointer" />
          
            <FaUser
               onClick={() => setShowLogin(true)}
                className="cursor-pointer" />
          
          <button className="btn-primary px-5 bg-amber-600 rounded-full py-2">Order Now</button>
        </div>

        {/* Mobile Toggle */}
        {/* Add icons for mobile */}
        <div className="flex gap-6 items-center mt-4">
          <SlBasket className="cursor-pointer text-xl" />
          
            <FaUser
            onClick={() => setShowLogin(true)}
             className="cursor-pointer text-xl" />
          
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <RxCross2 size={24} /> : <IoMenu size={24} />}
        </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background px-4 pb-4"
          >
            <ul className="flex flex-col gap-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => {
                    setActiveLink(item.name);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 font-medium ${
                    activeLink === item.name
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
              <button className="btn-primary mt-4">Order Now</button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
