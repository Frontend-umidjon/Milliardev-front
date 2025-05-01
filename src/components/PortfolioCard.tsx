// components/PortfolioCard.tsx

import React from "react";
import { Card, CardContent } from "./ui/card";
import { Link } from "react-router-dom";

interface PortfolioCardProps {
  name: string;
  link: string;
  image: string;
  _id: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ name, image, _id }) => {
  return (
    <Card className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer bg-gray-900 w-full max-w-sm">
      <div
        className="w-full h-80 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
        style={{
          backgroundImage: `url(https://api.milliardev.com/uploads/${image})`,
        }}
      ></div>

      <CardContent className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60">
        <h3 className="text-xl font-bold text-white mb-3 text-center">
          {name}
        </h3>
        <Link
          to={`/projects/${_id}`}
          className="bg-yellow-500 text-black px-5 py-2 rounded-md font-semibold hover:bg-yellow-600 transition"
        >
          Подробнее
        </Link>
      </CardContent>
    </Card>
  );
};

export default PortfolioCard;
