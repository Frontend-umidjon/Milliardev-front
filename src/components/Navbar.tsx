import { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import logo from "../assets/milliardev.jpg";
import { BsTelegram } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiPhone } from "react-icons/fi"; 
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-6 lg:px-16 py-4 text-[20px] ${
        darkMode ? "text-white" : "text-black"
      } shadow-md`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to={"/"}>
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Логотип Milliardev"
              className="h-10 rounded-[50%]"
            />
            <h1>Milliardev</h1>
          </div>
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex gap-6 text-[18px] font-medium">
          <li className="hover:text-blue-500 cursor-pointer">
            <Link to={"/"}>Главная</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <Link to={"/about"}>О компании</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <Link to={"/projects"}>Проекты</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <Link to={"/services"}>Услуги</Link>
          </li>
        </ul>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          <span className="hidden lg:flex items-center gap-1 text-sm font-medium">
            <FiPhone size={18} /> +998 78 113-60-02
          </span>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Telegram link */}
          <button>
            <Link to={"https://t.me/milliardev_admin"} target="_blank">
              <BsTelegram />
            </Link>
          </button>

          {/* Instagram icon (no link yet) */}
          <button>
            <FaInstagram />
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-md cursor-pointer"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-gray-100 dark:bg-gray-900 p-4 space-y-2 text-[18px] font-medium text-center text-black dark:text-white">
          <li className="hover:text-blue-500 cursor-pointer">
            <Link to={"/"}>Главная</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <Link to={"/about"}>О компании</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <Link to={"/projects"}>Проекты</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <Link to={"/services"}>Услуги</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
