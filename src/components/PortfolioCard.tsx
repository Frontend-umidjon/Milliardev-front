import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { useNavigate } from "react-router-dom";
import { useSendTelegramMessageMutation } from "../redux/api/telegram";
import { useTelegramUser } from "../hooks/useTelegramUser";

interface PortfolioCardProps {
  name: string;
  link: string;
  image: string;
  _id: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ name, image, _id }) => {
  const navigate = useNavigate();
  const telegramUser = useTelegramUser();
  const [sendTelegramMessage, { isLoading }] = useSendTelegramMessageMutation();
  const [showUserId, setShowUserId] = useState(false);

  const handleClick = async () => {
    const tg = window.Telegram?.WebApp;
    const isTelegramWebApp = !!tg;

    if (isTelegramWebApp && telegramUser) {
      setShowUserId(true);
      setTimeout(() => {
        setShowUserId(false);
        navigateToProject();
      }, 3000);
    } else {
      navigateToProject();
    }
  };

  const navigateToProject = async () => {
    try {
      if (telegramUser?.id) {
        await sendTelegramMessage({
          userId: telegramUser.id,
          projectId: _id,
        }).unwrap();
      }
      navigate(`/projects/${_id}`);
    } catch (error) {
      console.error("Xatolik:", error);
      alert("Telegramga xabar yuborishda xatolik yuz berdi.");
    }
  };

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

        {showUserId && telegramUser && (
          <div className="bg-yellow-500 text-black px-4 py-2 rounded-md mb-3 text-center">
            <p className="font-semibold">Sizning ID: {telegramUser.id}</p>
          </div>
        )}

        <button
          onClick={handleClick}
          className="bg-yellow-500 text-black px-5 py-2 rounded-md font-semibold hover:bg-yellow-600 transition"
          disabled={isLoading}
        >
          {isLoading ? "Yuborilmoqda..." : "Подробнее"}
        </button>
      </CardContent>
    </Card>
  );
};

export default PortfolioCard;
