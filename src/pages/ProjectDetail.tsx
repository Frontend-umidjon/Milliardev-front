import React from "react";
import { useParams } from "react-router-dom";
import { useGetProjectByIdQuery } from "../redux/api/projects";
import LoadingSpinner from "../components/LoadingSpinner";
import Footer from "../components/Footer";

const ProjectDetail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetProjectByIdQuery({ id });
  const project = data?.data?.payload;

  if (isLoading) return <LoadingSpinner />;
  if (error || !project)
    return (
      <div className="text-red-500 text-center py-10">
        Не удалось загрузить детали проекта
      </div>
    );

  return (
    <div className="mt-12 bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src={`https://api.milliardev.com/uploads/${project.image}`}
              alt={project.name}
              className="w-full h-80 object-cover rounded-xl shadow-lg"
              onError={(e) =>
                (e.currentTarget.src =
                  "https://via.placeholder.com/400x300?text=No+Image")
              }
            />
          </div>

          {/* Project Details Section */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl font-bold text-center lg:text-left mb-5">
              {project.name}
            </h1>
            <p className="text-lg text-gray-400 mb-6">{project.description}</p>
            <div className="flex justify-center lg:justify-start">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-600 transition"
              >
                Посетить сайт
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default React.memo(ProjectDetail);
