// // components/PortfolioCard.tsx

// import React from "react";
// import { Card, CardContent } from "./ui/card";
// import { Link } from "react-router-dom";
// import { useSendTelegramMessageMutation } from "../redux/api/telegram";

// interface PortfolioCardProps {
//   name: string;
//   link: string;
//   image: string;
//   _id: string;
// }

// const PortfolioCard: React.FC<PortfolioCardProps> = ({ name, image, _id }) => {

//   const { } = useSendTelegramMessageMutation();

//   return (
//     <Card className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer bg-gray-900 w-full max-w-sm">
//       <div
//         className="w-full h-80 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
//         style={{
//           backgroundImage: `url(https://api.milliardev.com/uploads/${image})`,
//         }}
//       ></div>

//       <CardContent className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60">
//         <h3 className="text-xl font-bold text-white mb-3 text-center">
//           {name}
//         </h3>
//         <Link
//           to={`/projects/${_id}`}
//           className="bg-yellow-500 text-black px-5 py-2 rounded-md font-semibold hover:bg-yellow-600 transition"
//         >
//           Подробнее
//         </Link>
//       </CardContent>
//     </Card>
//   );
// };

// export default PortfolioCard;


import React, { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { useNavigate } from "react-router-dom";
import { useSendTelegramMessageMutation } from "../redux/api/telegram";

interface PortfolioCardProps {
  name: string;
  link: string;
  image: string;
  _id: string;
}

interface TelegramUser {
  id: number;
  first_name: string;
  username?: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ name, image, _id }) => {
  const navigate = useNavigate();
  const [telegramUser, setTelegramUser] = useState<TelegramUser | null>(null);
  const [sendTelegramMessage, { isLoading }] = useSendTelegramMessageMutation();
  const [showUserId, setShowUserId] = useState(false);

  // ✅ Telegram foydalanuvchisini olish
  useEffect(() => {
    const tg = (window as any).Telegram?.WebApp;
    if (tg && tg.initDataUnsafe?.user) {
      setTelegramUser(tg.initDataUnsafe.user);
    }
  }, []);

  const handleClick = async () => {
    if (!telegramUser) {
      alert(`Telegram foydalanuvchi ma'lumoti topilmadi.${telegramUser}`);
      return;
    }

    // Telegram web app orqali kirilganda, foydalanuvchi ID sini ko'rsatish
    const isTelegramWebApp = (window as any).Telegram?.WebApp;
    if (isTelegramWebApp) {
      setShowUserId(true);
      // 3 soniyadan keyin ID ni yashirish va keyingi sahifaga o'tish
      setTimeout(() => {
        setShowUserId(false);
        navigateToProject();
      }, 3000);
    } else {
      // Oddiy saytdan kirilganda to'g'ridan-to'g'ri loyiha sahifasiga o'tish
      navigateToProject();
    }
  };

  const navigateToProject = async () => {
    try {
      // Telegram foydalanuvchi mavjud bo'lsagina xabar yuborish
      if (telegramUser && telegramUser.id) {
        await sendTelegramMessage({
          userId: telegramUser.id, // Endi bu aniq number tipida
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