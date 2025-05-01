import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-screen h-screen bg-[rgb(18,23,35)] flex flex-col items-center justify-center text-white px-4">
      <div className="text-center mb-6">
        <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r border-gray-700 to-[#5E8A79]">
          404
        </h1>
        <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-300">
          Страница не найдена
        </h2>
        <p className="text-xl md:text-2xl text-gray-400 mb-8">
          Похоже, эта страница исчезла в цифровом космосе. Может быть, она была
          перемещена, или никогда не существовала.
        </p>
      </div>

      <div className="animate-pulse mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-32 h-32 text-[#5E8A79] animate-spin"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m4 4v2a9 9 0 11-9-9h2a7 7 0 107 7v-2a9 9 0 10-9 9z"
          />
        </svg>
      </div>

      <Link
        to="/"
        className="bg-[#5E8A79] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#406456] transition-all duration-300 transform hover:scale-105"
      >
        Вернуться на главную
      </Link>

      <div className="absolute bottom-4 text-gray-500 text-sm">
        <span className="italic">
          Milliardev IT Company — Центр веб-технологий
        </span>
      </div>
    </div>
  );
};

export default React.memo(NotFound);
