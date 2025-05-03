import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Courses from "../components/Main";
import PortfolioGrid from "../components/Section";
import ParticlesBackground from "../components/effect";

function Home() {
  return (
    <div className="relative">
      <div className="border border-transparent">
        <ParticlesBackground />
        <div className="container mx-auto px-4 sm:px-6 max-w-[700px] mt-50 text-center text-white relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Milliardev IT —{" "}
            <span className="text-[#6A9C89]">Ваш надежный IT-партнёр</span> для развития бизнеса
          </h1>

          <p className="mt-15 text-[#bcbcbc] text-[16px] sm:text-[18px]">
            Мы разрабатываем современные веб-сайты, мобильные приложения и
            IT-решения, которые помогают вашему бизнесу расти и развиваться.
            Milliardev IT — инновационные технологии для достижения ваших целей.
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-center mt-10 mb-70">
            <Link to={"/services"}>
              <button className="px-5 sm:px-6 py-3 text-white bg-[#5E8A79] rounded-[2px] hover:bg-[#406456] transition text-[15px] sm:text-[17px]">
                Наши услуги
              </button>
            </Link>
            <Link to={"/projects"}>
              <button className="px-5 sm:px-6 py-3 text-white bg-[#2A2F39] rounded-[2px] hover:bg-[#22262f] transition text-[15px] sm:text-[17px]">
                Наши проекты
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Courses />
      <PortfolioGrid />
      <Footer />
    </div>
  );
}

export default Home;
