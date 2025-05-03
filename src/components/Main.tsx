
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <div className="bg-gray-900 text-white py-12 md:py-20">
      <div className="max-w-screen-lg mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
          Наши услуги
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full sm:w-80 md:w-[320px] bg-gray-800 border border-gray-700 rounded-lg p-6 flex flex-col items-center"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png"
              alt="Веб-разработка"
              className="w-16 h-16 md:w-20 md:h-20 mb-4"
            />
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-center">
              Веб-разработка
            </h3>
            <p className="text-center text-sm md:text-base text-gray-300 mb-4">
              Разработка современных и адаптивных веб-сайтов с использованием последних технологий.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full sm:w-80 md:w-[320px] bg-gray-800 border border-gray-700 rounded-lg p-6 flex flex-col items-center"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
              alt="Мобильные приложения"
              className="w-16 h-16 md:w-20 md:h-20 mb-4"
            />
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-center">
              Мобильные приложения
            </h3>
            <p className="text-center text-sm md:text-base text-gray-300 mb-4">
              Создание кроссплатформенных мобильных приложений под iOS и Android.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full sm:w-80 md:w-[320px] bg-gray-800 border border-gray-700 rounded-lg p-6 flex flex-col items-center"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1829/1829585.png"
              alt="UX/UI дизайн"
              className="w-16 h-16 md:w-20 md:h-20 mb-4"
            />
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-center">
              UX/UI дизайн
            </h3>
            <p className="text-center text-sm md:text-base text-gray-300 mb-4">
              Разработка пользовательских интерфейсов и улучшение опыта взаимодействия.
            </p>
          </motion.div>

        </div>

        <div className="flex justify-center mt-12">
          <a
            href="#"
            className="inline-block px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-semibold bg-blue-600 hover:bg-blue-700 rounded-full"
          >
            Подробнее
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
