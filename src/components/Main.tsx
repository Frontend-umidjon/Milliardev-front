import { motion } from "framer-motion";
import { Button } from "./ui/button";
import TextEffect from "./TextEffect";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Создание веб-сайтов",
    description:
      "Мы создаем современные, быстрые и адаптивные веб-сайты для вашего бизнеса. У нас есть опыт в разработке лендингов, корпоративных сайтов и интернет-магазинов.",
    image: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png", // Web development icon
  },
  {
    title: "Разработка Telegram-ботов",
    description:
      "Автоматизированные Telegram-боты: прием заказов, интеграция платежных систем, создание и развитие интерактивного взаимодействия с пользователями.",
    image: "https://cdn-icons-png.flaticon.com/512/2111/2111646.png", // Telegram bot icon
  },
  {
    title: "Услуги графического дизайна",
    description:
      "Создание логотипов, брендинг, рекламные баннеры и другие графические работы. Мы поможем сделать ваш бизнес более привлекательным с помощью креативного и современного дизайна.",
    image: "https://cdn-icons-png.flaticon.com/512/1829/1829585.png", // Graphic design icon
  },
];

export default function Services() {
  return (
    <div className="bg-[rgb(18,23,35)] text-white py-20 px-8 text-center relative">
      <TextEffect text={"Наши услуги"} />
      <div className="flex flex-col md:flex-row gap-8 justify-center relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-[#161b22] p-8 rounded-xl w-[350px] shadow-xl border border-gray-700 flex flex-col justify-between"
          >
            <div className="flex flex-col items-start">
              <div className="flex gap-2 mb-4">
                {Array(5)
                  .fill("⭐")
                  .map((star, i) => (
                    <span key={i} className="text-yellow-500">
                      {star}
                    </span>
                  ))}
              </div>
              <p className="text-gray-300 mb-4 text-left text-[15px] leading-relaxed">
                {service.description}
              </p>
              <div className="border-b border-gray-700 w-full my-4"></div>
              <div className="flex items-center gap-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Link to="/services">
          <Button
            variant="outline"
            className="border-white text-white bg-rgb(18,23,35) hover:bg-white hover:text-blue-900 transition-all px-8 py-6 text-lg font-semibold uppercase tracking-widest border-2"
          >
            Подробнее
          </Button>
        </Link>
      </div>
    </div>
  );
}
