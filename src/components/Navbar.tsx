import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/milliardev.jpg";
import { BsTelegram } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiPhone } from "react-icons/fi"; 
const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-6 lg:px-16 py-4 text-[20px] text-white backdrop-blur-lg
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

       
        <div className="flex items-center gap-4">
          <span className="hidden lg:flex items-center gap-1 text-sm font-medium">
            <FiPhone size={18} /> +998 78 113-60-02
          </span>

          
          <button>
            <Link to={"https://t.me/milliardev_admin"} target="_blank">
              <BsTelegram />
            </Link>
          </button>

          
          <button>
            <FaInstagram />
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        
        </div>
      </div>

     
      {menuOpen && (
        <ul className="md:hidden  bg-transparent backdrop-blur-xl p-4 space-y-2 text-[18px] font-medium text-center text-white">
          <li className="hover:text-blue-500 cursor-pointer border-b-[0.5px] opacity-70 pb-2 border-b-white">
            <Link to={"/"}>Главная</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer border-b-[0.5px] opacity-70 pb-2 border-b-white">
            <Link to={"/about"}>О компании</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer border-b-[0.5px] opacity-70 pb-2 border-b-white">
            <Link to={"/projects"}>Проекты</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer border-b-[0.5px] opacity-70 pb-2 border-b-white">
            <Link to={"/services"}>Услуги</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
