import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Courses from "../components/Main";
import PortfolioGrid from "../components/Section";
import ParticlesBackground from "../components/effect";

function Home() {
  return (
    <div className="relative ">
      <div className="border border-transparent">
        <ParticlesBackground />
        <div className="container  mx-auto max-w-[700px] mt-50 text-center text-white relative z-10">
          <h1 className="text-5xl font-bold">
            Milliardev IT —{" "}
            <span className="text-[#6A9C89]">Ваш надежный IT-партнёр</span> для
            развития бизнеса
          </h1>

          <p className="mt-15 text-[#bcbcbc] text-[18px]">
            Мы разрабатываем современные веб-сайты, мобильные приложения и
            IT-решения, которые помогают вашему бизнесу расти и развиваться.
            Milliardev IT — инновационные технологии для достижения ваших целей.
          </p>

          <div className="flex gap-4 items-center justify-center mt-10 mb-70">
            <Link to={"/services"}>
              <button className="px-6 py-3 text-white bg-[#5E8A79] rounded-[2px] hover:bg-[#406456] transition text-[17px]">
                Наши услуги
              </button>
            </Link>
            <Link to={"/projects"}>
              <button className="px-6 py-3 text-white bg-[#2A2F39] rounded-[2px] hover:bg-[#22262f] transition text-[17px]">
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

// import { Link } from "react-router-dom";
// import Footer from "../components/Footer";
// import Courses from "../components/Main";
// import PortfolioGrid from "../components/Section";
// import useParticles from "../components/effect";

// function Home() {
//   const particlesRef = useParticles();
//   return (
//     <div>
//       <div
//         ref={particlesRef}
//         id="tsparticles"
//         className="absolute top-0 h-screen max-w-full text-white -z-1"
//       ></div>

//       <div className="container mx-auto max-w-[700px] mt-50 text-center text-white">
//         <h1 className="text-5xl font-bold">
//           Milliardev IT —{" "}
//           <span className="text-[#6A9C89]">Ваш надежный IT-партнёр</span> для
//           развития бизнеса
//         </h1>

//         <p className="mt-15 text-[#bcbcbc] text-[18px]">
//           Мы разрабатываем современные веб-сайты, мобильные приложения и
//           IT-решения, которые помогают вашему бизнесу расти и развиваться.
//           Milliardev IT — инновационные технологии для достижения ваших целей.
//         </p>

//         <div className="flex gap-4 items-center justify-center mt-10 mb-70">
//           <Link to={"/services"}>
//             <button className="px-6 py-3 text-white bg-[#5E8A79] rounded-[2px] hover:bg-[#406456] transition text-[17px]">
//               Наши услуги
//             </button>
//           </Link>
//           <Link to={"/projects"}>
//             <button className="px-6 py-3 text-white bg-[#2A2F39] rounded-[2px] hover:bg-[#22262f] transition text-[17px]">
//               Наши проекты
//             </button>
//           </Link>
//         </div>
//       </div>

//       <Courses />
//       <PortfolioGrid />
//       <Footer />
//     </div>
//   );
// }

// export default Home;
