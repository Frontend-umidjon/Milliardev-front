import React from "react";
import { FaTelegram, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import logg from "../assets/milliardev.jpg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1E2230] text-gray-300 pt-12 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <img src={logg} alt="Milliardev IT" className="w-24 mb-4" />
          <p className="text-gray-400 mb-4">
            Milliardev IT — создаем решения с помощью современных технологий.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://t.me/milliardev_admin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram size={22} />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram size={22} />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube size={22} />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebook size={22} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Полезные ссылки</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/about" className="hover:underline">
                О нас
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:underline">
                Портфолио
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Помощь</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <span className="hover:underline cursor-pointer">Связаться</span>
            </li>
            <li>
              <span className="hover:underline cursor-pointer">
                +998 78 113-60-62
              </span>
            </li>
            <li>
              <span className="hover:underline cursor-pointer">
                info@milliardev.uz
              </span>
            </li>
            <li>
              <span className="hover:underline cursor-pointer">
                Пн-Пт: 9:00 - 18:00
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Документы</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Политика конфиденциальности</li>
            <li>Условия использования</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Milliardev IT Company. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
