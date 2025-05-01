import { Card, CardContent } from "../components/ui/card";
import { Monitor, Code, Shield } from "lucide-react";
import Footer from "../components/Footer";

export default function AboutPage() {
  const features = [
    {
      icon: Monitor,
      title: "Инновационные технологии",
      description:
        "Мы интегрируем новейшие технологии в каждый проект, создавая высокоэффективные и инновационные продукты. Мы предпочитаем использовать нестандартные подходы.",
    },
    {
      icon: Code,
      title: "Программирование и решения",
      description:
        "Мы поддерживаем самые современные методологии программирования. Мы создаем высококачественные системы на современных языках программирования, таких как JavaScript, Python, Go.",
    },
    {
      icon: Shield,
      title: "Безопасность и надежность",
      description:
        "Безопасность — это наша основная ценность. Мы обеспечиваем высокий уровень безопасности в каждом решении.",
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen px-6 md:px-16 py-10 mt-20">

      {/* Company Description Section */}
      <div className="text-center">
        <h2 className="text-5xl font-bold mb-4">О нас</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Мы используем новейшие технологии и передовые методологии для создания
          высокоэффективных и инновационных систем. Мы понимаем потребности
          каждого клиента и предоставляем решения, адаптированные под его нужды.
        </p>
      </div>

      <div className="bg-gray-900 text-white mt-20 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-6">Почему стоит выбрать нас?</h1>
          <div className="text-gray-400">
            <p className="text-lg mb-4">
              Мы выбираем лучшие технологии для каждого проекта. Наша команда
              состоит из высококвалифицированных специалистов, которые
              предлагают передовые решения для каждого проекта.
            </p>
            <p className="text-lg mb-4">
              Наши системы безопасны и надежны. Мы стремимся обеспечить высокий
              уровень безопасности и эффективности в каждом решении.
            </p>
            <p className="text-lg mb-6">
              Наша команда постоянно изучает новейшие технологии и предлагает
              лучшие решения.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Card className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <CardContent className="flex justify-center">
              <img
                src="https://via.placeholder.com/600x400.png?text=IT+Company+Image"
                alt="Illustration of IT Company"
                className="w-full max-w-md"
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white mt-10">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="bg-transparent border-none text-center hover:bg-[#171F28] transition-all"
          >
            <CardContent className="flex flex-col items-center gap-4 p-6">
              <feature.icon className="w-12 h-12 text-green-500 text-left" />
              <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
              <p className="text-md text-gray-400">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Footer />
    </div>
  );
}
