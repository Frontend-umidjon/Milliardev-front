import { motion } from "framer-motion";
import { JSX } from "react";
import {
  FaDesktop,
  FaRobot,
  FaPaintBrush,
  FaMobileAlt,
  FaBullhorn,
  FaShieldAlt,
} from "react-icons/fa";

const Services = () => {
  return (
    <div className="bg-[#0f172a] min-h-screen text-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold mb-8 text-center leading-tight"
        >
          Выведем ваш бизнес на{" "}
          <span className="text-blue-400">новый уровень</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-gray-400 text-lg text-center max-w-3xl mx-auto mb-16"
        >
          Внедряем современные технологии для развития вашей компании с помощью
          инновационных решений. Сотрудничая с нами — вы выбираете качество,
          скорость и результат.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <ServiceCard
            icon={
              <FaDesktop className="text-5xl text-purple-500 hover:text-blue-500 transition-all duration-300" />
            }
            title="Разработка веб-сайтов"
            description="Создаём SEO-оптимизированные, быстрые и адаптивные веб-платформы: лендинги, интернет-магазины и корпоративные сайты."
          />
          <ServiceCard
            icon={
              <FaRobot className="text-5xl text-green-500 hover:text-yellow-500 transition-all duration-300" />
            }
            title="Telegram-боты и автоматизация"
            description="Разрабатываем передовые Telegram-боты для оптимизации бизнес-процессов и улучшения пользовательского опыта."
          />
          <ServiceCard
            icon={
              <FaPaintBrush className="text-5xl text-pink-500 hover:text-red-500 transition-all duration-300" />
            }
            title="Графический дизайн и брендинг"
            description="Логотипы, фирменный стиль, маркетинговые материалы — всё для того, чтобы ваш бренд выделялся на фоне конкурентов."
          />
          <ServiceCard
            icon={
              <FaMobileAlt className="text-5xl text-blue-500 hover:text-purple-500 transition-all duration-300" />
            }
            title="Разработка мобильных приложений"
            description="Создаём современные и интуитивно понятные мобильные приложения для iOS и Android, с особым вниманием к пользовательскому опыту."
          />
          <ServiceCard
            icon={
              <FaBullhorn className="text-5xl text-orange-500 hover:text-red-500 transition-all duration-300" />
            }
            title="Цифровой маркетинг и SMM"
            description="Развивайте свой бренд в цифровом пространстве: стратегии SMM, контекстная реклама, контент-маркетинг и многое другое."
          />
          <ServiceCard
            icon={
              <FaShieldAlt className="text-5xl text-teal-500 hover:text-green-500 transition-all duration-300" />
            }
            title="Кибербезопасность и IT-консалтинг"
            description="Консультации и практическая помощь по обеспечению информационной безопасности и укреплению IT-инфраструктуры."
          />
        </div>

        <div className="mt-20 flex justify-center">
          <motion.a
            href="https://t.me/milliardev_admin"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300"
          >
            Связаться сейчас
          </motion.a>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({
  icon,
  title,
  description,
}: {
  icon: JSX.Element;
  title: string;
  description: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="bg-[#1e293b] p-8 rounded-2xl shadow-xl hover:shadow-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300"
  >
    <div className="mb-6">{icon}</div>
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <p className="text-gray-400 text-base">{description}</p>
  </motion.div>
);

export default Services;
